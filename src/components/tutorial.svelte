<script>
  import { Bash } from "@anas2479/bash-mirror";

  let el;

  export let title;
  export let description;

  let userProgress = 0;

  function lesson(options, shell, callback) {
    title.innerHTML = options.title;
    description.innerHTML = options.description;

    shell.input(`${options.quizQuestion}`, (quiz_answer) => {
      callback(quiz_answer);
    });
  }

  }

  onMount(() => {
    let shell = new Bash(el, {
      sign: "$",
      debug: true,
      defaultCommands: true,
    });

    lesson(
      {
        title: "Welcome to Shell Ninja",
        description: `An interactive tutorial to get you comfortable with the CLI (Command-line Interface).`,
        quizQuestion: "Start? y/n",
      },
      shell,
      (start) => {
        checkAnswer(start, "y", () => {
            shell.clear()
          /* -------Intro----------*/
          lesson(
            {
              title: `Alright, lets begin by defining what a CLI is. CLI stands for command-line interface and it's a program that runs text-based commands on the computer. `,
              description: ``,
              quizQuestion: "Next? y/n",
            },
            shell,
            (lesson0) => {
              checkAnswer(lesson0, "y", () => {
                  shell.clear()
                
                /*---------------------Intro 2 ------------------*/
                lesson(
                  {
                    title: `This tutorial, won't go into advanced topics but will cover only enough to get you rolling.`,
                    description: ``,
                    quizQuestion: "Ready y/n",
                  },
                  shell,
                  (lesson1) => {
                    checkAnswer(lesson1, "y", () => {
                        shell.clear()
                      /*------------------Lesson 1------------------*/
                      lesson(
                        {
                          title:`Now, the first command we'll learn is the <span class="font-bold">LS</span> command. The LS command simply lists all the items in the current folder. `,
                          description:``,
                          quizQuestion: `Go ahead, run the LS command below. `,
                        },
                        shell,
                        (lsCommand) => {
                          checkAnswer(lsCommand, "ls", () => {
                            shell.clear();
                            shell.runCommand("ls");

                            lesson({
                                title: `Awesome! Now we know how to how to chech the contents of the current folder. Let's navigate into one of these folders with the CD command. The CD command let's you change your location in the filesystem. Go ahead and type "cd" followed by the name of the folder you want to change to.`,
                                description:``,
                                quizQuestion:'Run the cd command bellow.👇'
                            },shell,(cdCommand)=>{
                                let userResponse = _.words(cdCommand,/[^ ]+/g)
                                checkAnswer(userResponse[0], 'cd', (answer)=>{
                                    shell.clear()
                                    let folder = _.join(_.slice(userResponse,1,1000),' ')
                                    shell.runCommand('cd',folder)
                                    
                                    lesson({
                                        title:`Good Job! Notice the path changed to <span class="text-gray-500">root/${folder}</span>`,
                                        description:''
                                    })
                                })
                            })
                          });
                        }
                      );
                    });
                  }
                );
              });
            }
          );
        });
      }
    );
  });
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
