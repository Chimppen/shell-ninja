
import Lesson from'./Lesson'
import _ from'lodash'
import checkAnswer from'../utilities/checkAnswer'
import End from'./End'

export default class Rm_command  extends Lesson{
    constructor(title, description, shell){
        super()

        localStorage.setItem('current_lesson', 'Rm Command')

        shell.runCommand('touch', 'example.txt')
        shell.clear()

        title.innerHTML = ` The rm command removes a file from the current folder to use it, you'd type "rm" followed by the name of the file you want to remove.`
        description.innerHTML =`⚠ This command may be different in other CLIs, i.e Powershell.`

        shell.input(`Try <span class="text-gray-300">rm example.txt</span>`,(answer)=>{
            let userRes = _.words(answer)
            checkAnswer(userRes[0], 'rm',  ()=>{
                shell.runCommand('rm', _.slice(userRes, 1,1000))

                title.innerHTML = `Awesome! The file "${_.slice(userRes, 1,1000)}" was removed from the current folder.`

                shell.input('End? y/n', (end)=>{
                    shell.clear()
                    new End(title, description, shell)
                })
            })
        })
    }
}