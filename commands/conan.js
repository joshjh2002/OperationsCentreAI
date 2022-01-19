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
                description: "Our Conan server offers a casual PvE experience on the Exiled Lands map with 2x harvest rate and a few quality-of-life mods. The server is hosted in East US but is also suitable for players in the EU!",
                color: 16731689,
                image: {
                    url: "https://media.discordapp.net/attachments/651468992946503680/887389938864234556/8157651.png",
                },
                fields: [{
                        name: "Connection Info:",
                        value: "  •   Server Name: Operation Exiles - PvE - 2x - Casual RP - Modded \n  •   Server IP: 192.154.228.127:7905 \n  •   You can use [this link](https://operationscentre.github.io/community/join-conan) to join the server!",
                    },
                    {
                        name: "Admins:",
                        value: "Our __admins are available on the Discord__ to help with any important issues, however, we trust the community to be as __mature and patient as possible__ when the admins are not available in-game. __Please respect this__. Do not call admins for silly issues and respect that they may be busy, so please do not demand things or complain if they cannot be there right away.",
                    },
                    {
                        name: "Rules:",
                        value: "  •   No discriminatory or inappropriate language, usernames or pictures!\n  •   No base blocking\n  •   No blocking entrances to important areas\n  •   No building directly beside someone without permission",
                    },
                    {
                        name: "Server Mods:",
                        value: "Find the Steam collection [here!](https://steamcommunity.com/sharedfiles/filedetails/?id=2616177527)",
                    },
                    {
                        name: "Vote For Our Server:",
                        value: "Every 24-hours you can vote for our server [here](https://conan-exiles.com/server/89716/)!",
                    },
                ],
            };
            message.channel.send({ embed });
        } else {
            message.channel.send(
                "You do not have the right permissions to use this command."
            );
        }
    },
};