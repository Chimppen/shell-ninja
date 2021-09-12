const checkAnswer = require("../utilities/checkAnswer");
const _ = require('lodash')
const Lesson = require("./Lesson");



module.exports = class Mkdir_command extends Lesson{
    constructor(title, description, shell){
        super()

        title.innerHTML = `The MKDIR command stands for make directory. It is used to create a new folder inside the current folder. You'd type "mkdir" followed by the name of the folder. `
        description.innerHTML = ``

        shell.input(`Try creating a folder with your name.`, (name)=>{
            let userResponse = _.words(name)
            checkAnswer(userResponse[0],'mkdir',()=>{
                shell.runCommand('mkdir', _.slice(userResponse,1,1000))

                title.innerHTML =` Awesome! A folder named <span class="text-gray-600">${ _.slice(userResponse,1,1000)}</span> was created. You can see the new folder by running the LS command. `

                description.innerHTML = `Check out other lessons.`
            })
        })
    }
}