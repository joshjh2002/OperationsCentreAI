require("dotenv").config();
module.exports = {
  test: function () {
    console.log("test");
  },

  CreateChannel: async function (reaction, user, admin_role, client) {
    console.log("Reaction Created on Report Message!");
    //creates channel in the same location as the reaction message
    const channel = await reaction.message.guild.channels.create(
      "ticket-" + this.GenerateName(user),
      {
        type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        parent: process.env.DC_TICKETS_CATEGORY, //This is the category it is in
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

    //Sends message to channel
    client.channels.cache
      .get(channel.id)
      .send(
        "Hello " +
          user.toString() +
          ", thank you for creating a support ticket! The " +
          admin_role +
          " will be with you shortly. Please can you describe your issue below?"
      );
  },

  GenerateName: function (user) {
    return user.id;
  },

  LoadCommands: function (fs, client) {
    const commandFiles = fs
      .readdirSync("./commands/")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      client.command.set(command.name, command);
    }
  },

  CreateTicket: async function (reaction, user, client) {
    let admin_role = "";
    console.log(reaction.emoji.name);
    if (reaction.emoji.name === "ConanExiles") {
      admin_role = "<@&" + process.env.DC_CONAN_ROLE + ">";
      this.CreateChannel(reaction, user, admin_role, client);
    } else if (reaction.emoji.name === "discord_logo") {
      admin_role = "<@&" + process.env.DC_DISCORD_ROLE + ">";
      this.CreateChannel(reaction, user, admin_role, client);
    } else if (reaction.emoji.name === "Rust") {
      admin_role = "<@&" + process.env.DC_RUST_ROLE + ">";
      this.CreateChannel(reaction, user, admin_role, client);
    } else if (reaction.emoji.name === "☑") {
      admin_role =
        "<@&" +
        process.env.DC_DISCORD_ROLE +
        ">" +
        " <@&" +
        process.env.DC_MOD_ROLE +
        ">";
      this.CreateChannel(reaction, user, admin_role, client);
    }
  },
};
