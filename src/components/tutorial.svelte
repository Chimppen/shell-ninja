<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import _ from "lodash";
  import { Bash } from "@anas2479/bash-mirror";


    let el

    export let title
    export let description
    

    function lesson(options,shell, callback) {
        title = options.title
        description = options.description

        shell.input(`${options.quizQuestion}`,(quiz_answer)=>{
            callback(quiz_answer)
        })
    }

  function checkAnswer(user_answer, anticipated_answer, callback) {
    if (_.toLower(user_answer) === _.toLower(anticipated_answer)) {
      callback(user_answer);
    }
  }

    onMount(()=>{
        let shell  = new Bash(el,{
            sign:'$',
            debug:true,
            defaultCommands:true
        })

        lesson({
            title:"Welcome to Shell Ninja",
            description: `An interactive tutorial to get you comfortable with the CLI (Command-line Interface).`,
            quizQuestion:"What's your name?"
        },shell, (name)=>{
                
        })
    })
    
    </script>
    
    
    <style>
        @import url('https://cdn.jsdelivr.net/npm/@anas2479/bash-mirror@2.2.4/lib/css/bash-mirror.css');
    
        .bash-mirror{
            width: 100%;
        }

    </style>  <div class=" flex items-center flex-1 min-h-full bg-gray-50">
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
