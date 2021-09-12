<script>
  import { Bash } from "@anas2479/bash-mirror";
  import lessons from "../lessons/lessons";
  import LessonLink from "./lesson-link.svelte";

  import Intro from "../lessons/Intro";



  

  }

  let lesson = Intro
  }

  let el;

  let title;
  let description;

  let userProgress = 0;



 
  let shell_header = `<div class="bash-mirror-header flex items-center">
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"> </div>
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"> </div>
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"> </div>
        <span class="text-xs mx-auto text-gray-400">Tutorial CLI</span>
      </div>`

  function newLesson(lesson) {
    setTimeout(() => {
      el.innerHTML = ``
      el.innerHTML = shell_header

      let shell = new Bash(el, {
        sign: "$",
        debug: true,
        defaultCommands: true,
      });
      
      shell.runCommand("rmdir", "test folder");
      shell.runCommand("rmdir", "Another test folder");
      shell.runCommand("mkdir", "Example");
      shell.clear();

      new lesson(title, description, shell);
    }, 300);
  }
  newLesson(lesson)
</script>

<div class="flex flex-col md:flex-row flex-wrap min-h-screen">
  <div class=" flex items-center flex-1 min-h-full bg-gray-50">
      <div class="content p-10 max-w-[600px]">
        <h1 bind:this="{title}" class="text-2xl text-gray-700">
          
        </h1>
        <p bind:this="{description}" class="text-base text-gray-600">
          
        </p>
      </div>
  </div>
  <div class="flex flex-1 items-center p-10">
    <div
      bind:this={el}
      class="bash-mirror transform md:-translate-x-20 shadow-2xl -translate-y-20 md:translate-y-0 "
    >
      <div class="bash-mirror-header flex items-center">
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full" />
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full" />
        <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full" />
        <span class="text-xs mx-auto text-gray-400">Tutorial CLI</span>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://cdn.jsdelivr.net/npm/@anas2479/bash-mirror@2.2.4/lib/css/bash-mirror.css");

  .bash-mirror {
    width: 100%;
  }
</style>
