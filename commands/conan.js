module.exports = {
  name: "conan",
  description: "sends conan embed",
  execute(message, args, Discord) {
    if (
      message.member.roles.cache.has("651471450695270423") ||
      message.member.roles.cache.has("754810662001311816") ||
      message.member.roles.cache.has("697047262081056828") ||
      message.member.roles.cache.has("651471748214030408")
    ) {
      const embed = {
        title: "Operation Exiles",
        description:
          "Our Conan server offers a casual PvE experience on the Exiled Lands map with 2x harvest rate and a few quality-of-life mods. The server is hosted in East US but is also suitable for players in the EU!",
        color: 16731689,
        image: {
          url: "https://operationscentre.github.io/community/img/conan-banner1.jpg",
        },
        fields: [
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
