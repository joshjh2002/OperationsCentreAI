module.exports = {
    name: "welcome",
    description: "sends welcome embed",
    execute(message, args, Discord) {
        if (
            message.member.roles.cache.has("651471450695270423") ||
            message.member.roles.cache.has("754810662001311816") ||
            message.member.roles.cache.has("697047262081056828") ||
            message.member.roles.cache.has("651471748214030408")
        ) {
            const embed = {
                title: "Socials!",
                color: 16347474,
                image: {
                    url: "https://media.discordapp.net/attachments/651470578741542936/813790022657638420/Operations_Logo.png",
                },
                fields: [{
                    name: "Social Media:",
                    value: "<:steam:904342254339129354> [Steam](https://steamcommunity.com/groups/operations-centre)\n:facebook: [Facebook](https://www.facebook.com/OperationsCentre)\n:instagram: [Instagram](https://instagram.com/operations_centre?igshid=ca1z2fkgwq4r)\n:twitter: [Twitter](https://twitter.com/OperationsCent)\n:youtube: [YouTube](https://www.youtube.com/channel/UCm-FUo4TagET2kA-JpVpwWw)",
                }, ],
            };
            message.channel.send({ embeds: [embed] });
        } else {
            message.channel.send(
                "You do not have the right permissions to use this command."
            );
        }
    },
};