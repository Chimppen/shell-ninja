const checkAnswer = require('../utilities/checkAnswer')
const _ = require('lodash')
const Lesson = require('./Lesson')
const Mkdir_command = require('./Mkdir-command')



module.exports = class Cd_command extends Lesson{
    constructor(title, description, shell){
        super()
        shell.runCommand('clear')
        title.innerHTML = `The CD command let's you change your location in the filesystem. Go ahead and type "cd" followed by the name of the folder you want to change to.`
        description.innerHTML = ``

        shell.input('Try <span class="text-gray-300">cd example</span>', (answer)=>{

            let userResponse = _.words(answer,/[^ ]+/g)

            checkAnswer(userResponse[0], 'cd', ()=>{

                shell.clear()
                let folder = _.join(_.slice(userResponse,1,1000),' ')
                shell.runCommand('cd',folder)
                let path = shell.fileSystem.printPath()

                title.innerHTML = `Awesome! Notice the path changed to <span class="text-gray-600"> ${path}</span>`
                
                shell.input(`Next part? y/n`, (answer2)=>{
                    checkAnswer(answer2,'y',()=>{
                        title.innerHTML = `Ok, now we'll learn how to go back to the previous folder. To do that,  you enter <span class="text-gray-600"> cd ..</span>`

                        shell.input(`Now try <span class="text-gray-300">cd ..</span> `, (cdBack)=>{
                            checkAnswer(cdBack,'cd ..', ()=>{
                                shell.runCommand('cd','..')

                                title.innerHTML = `Awesome! Notice how the path wen't from <span class="text-gray-600">root/${folder}</span> to <span class="text-gray-600">root/</span>.`

                                shell.input(`Next lesson? y/n`, (nextLesson)=>{
                                    checkAnswer(nextLesson, 'y', ()=>{
                                        new Mkdir_command(title, description, shell)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}