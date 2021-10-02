import Lesson from"./Lesson";


export default class End extends Lesson{
    constructor(title, description, shell){
        super()
        title.innerHTML = `That was it, for now.`
        description.innerHTML = `Thanl you sooo much for taking this course. Feel free to redo some of the lessons. `

        shell.outPut(`Or you can mess with me.`)
    }
}