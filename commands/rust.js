module.exports = {
  name: "rust",
  description: "sends rust embed",
  execute(message, args, Discord) {
    if (
      message.member.roles.cache.has("651471450695270423") ||
      message.member.roles.cache.has("754810662001311816") ||
      message.member.roles.cache.has("697047262081056828") ||
      message.member.roles.cache.has("651471748214030408")
    ) {
      const embed = {
        title: "Rusty Operations",
        description:
          "Our server brings a premium experience, offering a mixture of rebalanced gameplay, premium plugins and new maps. For US and UK/EU players!",
        color: 16749824,
        image: {
          url: "https://media.discordapp.net/attachments/742826117395775589/918252341587742730/RusticOperationsThemedHD.png",
        },
        fields: [
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
      message.channel.send({ embeds: [embed] });
    } else {
      message.channel.send(
        "You do not have the right permissions to use this command."
      );
    }
  },
};

/*

          {
            name: "Shortcut:",
            value:
              "You can download a shortcut that will launch the server right from your desktop [here](https://www.dropbox.com/s/p74pwhwm4aw5hr1/Rusty_Operations_2.0_shortcut.zip?dl=0).",
          },
          */
