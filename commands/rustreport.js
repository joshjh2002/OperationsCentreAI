module.exports = {
    name: "rustreport",
    description: "sends rust report embed",
    execute(message, args, Discord) {
        if (
            message.member.roles.cache.has("651471450695270423") ||
            message.member.roles.cache.has("754810662001311816") ||
            message.member.roles.cache.has("697047262081056828") ||
            message.member.roles.cache.has("651471748214030408")
        ) {
            const embed = {
                title: "Rusty Operations 2.0",
                description: "Have an issue to report? Find more details below!",
                color: 16749824,
                image: {
                    url: "https://media.discordapp.net/attachments/742745585718919239/882965249102348318/Untitled_1.jpg",
                },
                fields: [{
                    name: "Report an Issue:",
                    value: "Please **report any issues you find with the server here**, these can include server performance issues, glitches with the map and/or AI and other technical errors you find.\n\nPlease **do not report issues with other players here**, we value your privacy and would much rather use contact an admin directly!\n\nThank you for helping us make Rusty Operations 2.0 a better and more stable experience for all!",
                }, ],
            };
            message.channel.send({ embed });
        } else {
            message.channel.send(
                "You do not have the right permissions to use this command."
            );
        }
    },
};