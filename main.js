const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "-";

const fs = require("fs");

client.command = new Discord.Collection();

const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.command.set(command.name, command);
}
client.login("ODEzNzk5MTc4Njg5NzA4MTA0.YDUjiw.vrCdeKy0SPEYP6AGQYDM6A07JOg");

client.once("ready", () => {
    console.log("Operations Centre AI: Online!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).toLowerCase().split(" ");
    const command = args.shift().toLowerCase();

    client.command.get(command).execute(message, args, Discord, client);

    try {

    } catch (error) {
        message.channel.send("This command was not recognised. Please try again!");
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.author.id === user.id) {
        //Do whatever you like with it
        console.log(reaction.name)
    }
});