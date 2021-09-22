<script>
  import { Bash } from "@anas2479/bash-mirror";
  import lessons from "../lessons/lessons";
  import LessonLink from "./lesson-link.svelte";
  import _ from 'lodash'

  import Intro from "../lessons/Intro";



  
  let tutorial_menu_visible = "opacity-0 translate-y-2 pointer-events-none";

  function view_tutorial_menu() {
    if (
      tutorial_menu_visible === "opacity-0 translate-y-2 pointer-events-none"
    ) {
      tutorial_menu_visible = "opacity-full translate-y-0 pointer-events-auto";
    } else {
      tutorial_menu_visible = "opacity-0 translate-y-2 pointer-events-none";
    }
  }



  let lesson = Intro
  let currentLesson 

  if (localStorage.getItem('current_lesson') != undefined) {
    currentLesson = localStorage.getItem('current_lesson')
    lesson = _.find(lessons,{title: currentLesson}).lesson
  
  }

  function getLesson(event) {
    lesson = event.detail.name;
    localStorage.setItem('current_lesson', event.detail.current_lesson)
    currentLesson = localStorage.getItem('current_lesson')
    
  }

  let el;

  let title;
  let description;


let siteTitleTag

 
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
      siteTitleTag = title.innerHTML
    }, 300);
  }
  newLesson(lesson)
</script>

<svelte:head>
  <title>{siteTitleTag}</title>
</svelte:head>

<!--Tutorial Menu-->
<div
  class="{tutorial_menu_visible} absolute transition-all duration-100 transform translate-y-2 bg-white w-full min-h-full z-40">
  <div class="flex justify-between items-center p-10 w-full">
    <div/>
    <div>
      <button on:click={view_tutorial_menu}><img src="/close.svg" alt="close" class="w-[35px]"></button>
    </div>
  </div>
  <div class="px-10">
    <h1 class="text-2xl font-bold text-gray-800">Choose a lesson.</h1>
    <p class="text-gray-600"> Choose from a list of curated interactive lessons.</p>
  </div>
  <div class="relative p-10 grid gap-x-2 gap-y-4 grid-flow-row md:grid-cols-3 lg:grid-cols-4 grid-cols-2 ">
    {#each lessons as theLesson}
    
      <LessonLink
        title={theLesson.title}
        description={theLesson.description}
        lesson={theLesson.lesson}
        on:lesson={(event) => {
          getLesson(event);
          view_tutorial_menu();
          newLesson(lesson);
        }}>
        {#if theLesson.lesson === lesson}
        <div class="w-full bg-blue-600 h-2"></div>
      {/if}
      </LessonLink>
    {/each}
  </div>
</div>

<div class="absolute flex justify-between items-center px-5 md:px-10 py-5 w-full ">
  <div>
    <img src="/logo.svg" alt="" class="max-w-[100px] md:max-w-[150px]" />
  </div>
  <div>
    <div class="">
      {#if localStorage.getItem('current_lesson') != undefined}
        <button class="p-2 bg-gray-100 rounded"
        on:click="{()=>{
          localStorage.removeItem('current_lesson')
          window.location.reload()
        } }">Start Over</button>
     {/if}
      <button on:click={view_tutorial_menu} class="p-2 md:p-3 bg-gray-600 hover:bg-gray-700 text-gray-50 font-bold rounded-lg">
        <img class="inline" src="/lessons.svg" alt="lesson collection">
        Lessons
      </button>
    </div>
  </div>
</div>
<div class="flex flex-col md:flex-row flex-wrap min-h-screen">
  <div class=" flex items-center flex-1 min-h-full bg-gray-50">
    <div class="content p-10 max-w-[600px] mt-24 mb-5">
      <div class="mb-3 flex text-gray-500">Try out what you learn using the shell <div class=" max-w-[30px] mx-1 transform md:-rotate-90">👇</div> </div>
      <h1 bind:this={title} class="text-2xl text-gray-700" />
      <p bind:this={description} class="text-base text-gray-600" />
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

