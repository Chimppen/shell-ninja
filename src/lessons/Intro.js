const checkAnswer = require('../utilities/checkAnswer')
const Lesson = require('./Lesson')
const Ls_command = require('./ls-command')


module.exports = class Intro extends Lesson{

    constructor(title, description, shell){
        super()
        title.innerHTML = `Welcome to Shell Ninja.`
        description.innerHTML = `An interactive tutorial to get you comfortable with the CLI (Command-line Interface).`

        shell.input('Next? y/n', (answer)=>{

            title.innerHTML = `There are many different CLIs, but in this tutorial, we'll be using Bash.`
            description.innerHTML = `Bash is popular and many of the knowledge can be transfered to other CLIs.`
            checkAnswer(answer, 'y',()=>{
        
            shell.input(`Start? y/n`, (start)=>{
                checkAnswer(start, 'y',()=>{
                    shell.clear()
                    new Ls_command(title, description, shell)
                })
            })
        })

        
    })
}

}

