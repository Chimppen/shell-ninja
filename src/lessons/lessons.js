const Ls_command = require("./ls-command");
const Cd_command = require('./cdCommand');
const Mkdir_command = require("./Mkdir-command");
const Rmdir_command = require("./Rmdir-command");
const Touch = require("./touch-command");
const Rm_command = require("./Rm-command");

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
    },

    {
        title: 'MKDIR Command',
        description: `Learn how to create folders using the MKDIR command.`,
        lesson: Mkdir_command
    },

    {
        title: "RMDIR Command",
        description: `Learn how to remove folders using the rmdir command.`,
        lesson: Rmdir_command
    },

    {
        title: `Touch Command`,
        description: `Learn how to create files using the Touch command.`,
        lesson: Touch
    },

    {
        title:`Rm Command`,
        description:`Learn how to remove files using the RM command. `,
        lesson: Rm_command
    }
]