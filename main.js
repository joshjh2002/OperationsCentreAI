const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});

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

  client.channels.cache
    .get("947546216126890079")
    .messages.fetch("947824249303887942");
});

client.on("messageCreate", (message) => {
  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).toLowerCase().split(" ");
    const command = args.shift().toLowerCase();

    client.command.get(command).execute(message, args, Discord, client);
  } catch (error) {
    message.channel.send("This command was not recognised. Please try again!");
  }
});

client.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) return;
  //Do whatever you like with it
  if (reaction.message.id === "947824249303887942") {
    reaction.users.remove(user.id);
    let admin_role = "";
    console.log(reaction.emoji.name);
    if (reaction.emoji.name === "ConanExiles") {
      admin_role = "<@&" + "892427926811865119" + ">";
      create_channel(reaction, user, admin_role);
    } else if (reaction.emoji.name === "discord_logo") {
      admin_role = "<@&" + "893155966978240603" + ">";
      create_channel(reaction, user, admin_role);
    } else if (reaction.emoji.name === "Rust") {
      admin_role = "<@&" + "947809960534867998" + ">";
      create_channel(reaction, user, admin_role);
    } else if (reaction.emoji.name === "☑") {
      admin_role =
        "<@&" +
        "697047262081056828" +
        ">" +
        " <@&" +
        "651471748214030408" +
        ">";
      create_channel(reaction, user, admin_role);
    }
  }
});

async function create_channel(reaction, user, admin_role) {
  console.log("Reaction Created on Report Message!");
  const channel = await reaction.message.guild.channels.create(
    "ticket-" + user.id,
    {
      type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
      parent: "947529213928427541",
      permissionOverwrites: [
        {
          id: user.id, //To make it be seen by a certain role, user an ID instead
          allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"], //Allow permissions
          deny: [], //Deny permissions
        },
        {
          // same as before
          id: reaction.message.guild.roles.everyone,
          deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
        },
      ],
    }
  );
  client.channels.cache
    .get(channel.id)
    .send(
      "Hello " +
        user.toString() +
        ", thank you for creating a support ticket! The " +
        admin_role +
        " will be with you shortly. Please can you describe your issue below?"
    );
}
