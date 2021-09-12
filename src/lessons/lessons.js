const Ls_command = require("./ls-command");
const Cd_command = require('./cdCommand')

module.exports = [
    {
        title:`LS command.`,
        description:`Learn how to see the contents of the current folder with the ls command.`,
        lesson: Ls_command
    },

    {
        title:`CD command.`,
        description:`Learn how to navigate a file system with the CD command.`,
        lesson: Cd_command
    }
]