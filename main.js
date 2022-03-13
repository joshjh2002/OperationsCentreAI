require("dotenv").config();

const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});

const prefix = "-";

const fs = require("fs");
const { Query } = require("pg/lib");

client.command = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.command.set(command.name, command);
}
client.login(process.env.DC_TOKEN);

client.once("ready", () => {
  console.log("Operations Centre AI: Online!");

  client.channels.cache
    .get("947546216126890079")
    .messages.fetch("947824249303887942");

  CheckServerStatus();
});

client.on("messageCreate", (message) => {
  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
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

let conanStatus = "NULL";
let rustStatus = "NULL";

async function CheckServerStatus() {
  await QueryServers();
  let conanEmbed = await client.channels.cache
    .get("918251912795664384")
    .messages.fetch("950102920030990336");

  let rustEmbed = await client.channels.cache
    .get("918251912795664384")
    .messages.fetch("950102960820584579");

  let date = new Date();

  const c_embed = {
    title: "Operation Exiles",
    description:
      "Our Conan server offers a casual PvE experience on the Exiled Lands map with 2x harvest rate and a few quality-of-life mods. The server is hosted in East US but is also suitable for players in the EU!",
    color: 16731689,
    image: {
      url: "https://operationscentre.github.io/community/img/conan-banner1.jpg",
    },
    fields: [
      {
        name: "Status (Updated: " + date.toLocaleString() + " UK Time): ",
        value: "The server is currently: " + conanStatus,
      },
      {
        name: "Connection Info:",
        value:
          "  •   Server Name: Operation Exiles - PvE - 2x - Casual RP - Modded \n  •   Server IP: 192.154.228.127:7905",
      },

      {
        name: "Admins:",
        value:
          "Our __admins are available on the Discord__ to help with any important issues, however, we trust the community to be as __mature and patient as possible__ when the admins are not available in-game. __Please respect this__. Do not call admins for silly issues and respect that they may be busy, so please do not demand things or complain if they cannot be there right away.",
      },
      {
        name: "Rules:",
        value:
          " •   NO displaying inappropriate or discriminatory language, usernames or pictures!\n •   NO stealing other people’s belongings! (Even in a public place)\n •   NO blocking passageways or entrances to important areas within the Exiled Lands! (or block important NPC spawns)\n •   You must ask permission before building directly beside another player!\n•   NO more than 2 separate builds! (without permission)\n •   NO exploitation, cheating or hacking!\n •   MASSIVE builds the size of an entire city are prohibited unless you get permission from an admin!\n •   Thralls and Thespians should not be left in AI towns like Sepermeru!\n •   Obey the guild rules and city laws which are displayed in-game!\n •   All player trades must be completed with the agreed upon terms for all parties!",
      },
      {
        name: "Server Mods:",
        value:
          "Find the Steam collection [here!](https://steamcommunity.com/sharedfiles/filedetails/?id=2616177527)",
      },
      {
        name: "Vote For Our Server:",
        value:
          "Every 24-hours you can vote for our server [here](https://conan-exiles.com/server/89716/)!",
      },
      {
        name: "Shortcut:",
        value:
          "You can get a join link to the server by typing `-conanlink` into any chat. <@813799178689708104> will DM you the link!",
      },
    ],
  };

  conanEmbed.edit({ embeds: [c_embed] });

  const r_embed = {
    title: "Rusty Operations",
    description:
      "Our server brings a premium experience, offering a mixture of rebalanced gameplay, premium plugins and new maps. For US and UK/EU players!",
    color: 16749824,
    image: {
      url: "https://media.discordapp.net/attachments/742826117395775589/918252341587742730/RusticOperationsThemedHD.png",
    },
    fields: [
      {
        name: "Status (Updated: " + date.toLocaleString() + " UK Time): ",
        value: "The server is currently: " + rustStatus,
      },
      {
        name: "Connection Info:",
        value:
          "  •   Server Name: Rusty Operations - 3x | 1/2 Decay | (Shop|Events|Loot+|Clans) \n  •   Server IP: 199.127.61.3:28255",
      },
      {
        name: "Wipe Info:",
        value:
          "Our server does a __map and blueprint__ wipe on the __first Thursday of every month__ so as to stay on schedule with the Rust monthly updates.",
      },
      {
        name: "Admins:",
        value:
          "Our admins are there to help with __important issues__ on the server and are __as active as they can be__, please respect this. __Do not call admins for silly issues__ and respect that they __may be busy__, so please __do not demand things or complain__ if they cannot be there right away.",
      },
      {
        name: "Vote For Our Server:",
        value:
          "Every 24-hours you can vote for our server here to claim rewards in-game. Click [here](https://rust-servers.net/server/166243/)",
      },
      {
        name: "Shortcut:",
        value:
          "You can get a join link to the server by typing `-rustlink` into any chat. <@813799178689708104> will DM you the link!",
      },
    ],
  };

  rustEmbed.edit({ embeds: [r_embed] });

  setTimeout(CheckServerStatus, 186000);
}

async function QueryServers() {
  var conanServerData =
    "https://conan-exiles.com/api/?object=servers&element=detail&key=pPErjPgTNAqpdedOFkVcIFYJeF2JXdWYR88";

  $.getJSON(conanServerData, function (data) {
    let isOnline = data.is_online;

    if (isOnline == "1") {
      conanStatus = "Online";
    } else {
      conanStatus = "Offline";
    }
  });

  var rustSererData =
    "https://rust-servers.net/api/?object=servers&element=detail&key=c0T0pgPyaS6EnnU1XuTjFh1rmvJdPQz1gnE";

  $.getJSON(rustSererData, function (data) {
    let isOnline = data.is_online;

    if (isOnline == "1") {
      rustStatus = "Online";
    } else {
      rustStatus = "Offline";
    }
  });
}
