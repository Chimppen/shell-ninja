<div class="flex flex-col md:flex-row flex-wrap min-h-screen">
    <div class=" flex items-center flex-1 min-h-full bg-gray-50">
        <div class="container p-10">  
                <div class="content">
                    <h1 class="text-2xl text-gray-700">
                        {title}
                    </h1>
                    <p class="text-base text-gray-600">
                        {description}
                    </p>
                </div>
        </div>
    </div>
    <div class="flex flex-1 items-center p-10">
        <div bind:this="{el}" class="bash-mirror transform md:-translate-x-20 shadow-2xl -translate-y-20 md:translate-y-0 ">
            <div class="bash-mirror-header flex items-center">
                <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"></div>
                <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"></div>
                <div class="bg-gray-300 w-4 h-4 ml-2 rounded-full"></div>
            </div>
    
        </div>
    </div>
    </div>
    
    <script>
    import { onMount } from "svelte";
    import {fade,fly} from 'svelte/transition'
    import {Bash} from '@anas2479/bash-mirror'


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

    </style>