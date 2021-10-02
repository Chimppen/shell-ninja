import Ls_command from"./ls-command";
import Cd_command from'./cdCommand';
import Mkdir_command from"./Mkdir-command";
import Rmdir_command from"./Rmdir-command";
import Touch from"./touch-command";
import Rm_command from"./Rm-command";

export default [
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