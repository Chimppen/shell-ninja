const checkAnswer = require("../utilities/checkAnswer")
const Cd_command = require("./cdCommand")
const Lesson = require('./Lesson')


module.exports = class Ls_command extends Lesson{
    constructor(title, description, shell){
        super()
        
        localStorage.setItem('current_lesson', 'LS command.')

        title.innerHTML = `The <span class="font-bold">LS</span> command simply lists all the items in the current folder. `

        description.innerHTML = ``

        shell.input(`Go ahead, run the LS command below.`, (answer)=>{
            checkAnswer(answer,'ls', ()=>{
                shell.runCommand('ls')

                title.innerHTML =`Awesome! Notice how a list of an example folder and a file were returned.`
                description.innerHTML = `The ls command returns the contents of the current folder.`

                shell.input(`Next lesson? y/n`,(nextLesson)=>{
                    checkAnswer(nextLesson, 'y', ()=>{
                        shell.clear()
                        new Cd_command(title, description, shell)
                    })
                })
            })
        })
    }
}