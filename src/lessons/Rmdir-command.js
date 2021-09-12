
const checkAnswer = require('../utilities/checkAnswer')
const _ =  require('lodash')
const Lesson = require('./Lesson')
const Touch = require('./touch-command')

module.exports = class Rmdir_command extends Lesson{
    constructor(title, description, shell){
        super()

        title.innerHTML = `The RMDIR command stands for remove directory. It's used to remove a folder from the current folder. You'd type "rmdir" followed by the folder name you want to remove.`

        description.innerHTML = ``

        shell.input(`Try <span class="text-gray-300">rmdir example</span>`,(answer)=>{
            let userResponce = _.words(answer)
            checkAnswer(userResponce[0], 'rmdir', ()=>{
                shell.runCommand('rmdir', _.slice(userResponce,1,1000))

                title.innerHTML = `Greate! The folder "<span class="text-gray-600">${_.slice(userResponce,1,1000)}</span>" was removed.`
                
                shell.input(`Next lesson? y/n`, (next)=>{
                    checkAnswer(next,'y', ()=>{
                        new Touch(title, description, shell)
                    })
                })
            })
        })
    }
}