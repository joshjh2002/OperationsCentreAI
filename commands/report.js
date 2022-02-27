module.exports = {
  name: "report",
  description: "allows a user to send an error report",
  async execute(message, args, Discord) {
    if (
      message.member.roles.cache.has("651471450695270423") ||
      message.member.roles.cache.has("754810662001311816") ||
      message.member.roles.cache.has("697047262081056828") ||
      message.member.roles.cache.has("651471748214030408")
    ) {
      const embed = {
        title: "Create a Support Ticket",
        description:
          "React with the relevant emoji to create a ticket and get in contact with the appropriate team!",
        color: 12743972,
        fields: [
          {
            name: "<:ConanExiles:884739183543988284>",
            value: "Report an issue with the\nConan server",
            inline: true,
          },
          {
            name: "<:discord_logo:947544355533652048>",
            value: "Report an issue with the\nDiscord server",
            inline: true,
          },
          {
            name: "☑️",
            value: "Report a different issue",
            inline: true,
          },
        ],
      };
      let msg = await message.channel.send({ embeds: [embed] });
      msg.react("<:ConanExiles:884739183543988284>");
      msg.react("<:discord_logo:947544355533652048>");
      msg.react("☑");
    } else {
      message.channel.send(
        "You do not have the right permissions to use this command."
      );
    }
  },
};
