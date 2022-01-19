const { channel } = require("diagnostics_channel");
const { ShardClientUtil } = require("discord.js");

module.exports = {
    name: "math",
    description: "Calculator",
    async execute(message, args, Discord) {
        var i = 0;
        var param = "";
        while (args[i] != null) {
            param += args[i];
            i++;
        }
        const msg = await message.channel.send("Calculating...");
        const { exec } = require('child_process');
        var yourscript = await exec('.\\program\\ConsoleCalculator.exe ' + param,
            (error, stdout, stderr) => {
                console.log(stdout.trim());
                message.channel.send(stdout.trim());
                console.log(stderr.trim());
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                    message.channel.send("Something went wrong. Please try again!");
                }
            });
        msg.delete();
    },
};