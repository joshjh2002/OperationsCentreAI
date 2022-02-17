module.exports = {
    name: "rules",
    description: "sends rules embed",
    execute(message, args, Discord) {
        if (
            message.member.roles.cache.has("651471450695270423") ||
            message.member.roles.cache.has("754810662001311816") ||
            message.member.roles.cache.has("697047262081056828") ||
            message.member.roles.cache.has("651471748214030408")
        ) {
            const embed = {
                title: "RULES",
                description: "*Please read the rules below:*",
                color: 16034331,
                image: {
                    url: "https://media.discordapp.net/attachments/651470578741542936/813790022657638420/Operations_Logo.png",
                },
                fields: [{
                        name: ":one:",
                        value: "Use correct channels for what you are posting \n(Check Channel Description)",
                    },
                    {
                        name: ":two:",
                        value: "No loud noises or music played through your microphone!",
                    },
                    {
                        name: ":three:",
                        value: "No political or religious arguments!",
                    },
                    {
                        name: ":four:",
                        value: "No advertisement or selling of products!",
                    },
                    {
                        name: ":five:",
                        value: "No spamming channels!",
                    },
                    {
                        name: ":six:",
                        value: "If you're streaming while in chat, you MUST have a `#` next to your name!",
                    },
                    {
                        name: ":seven:",
                        value: "No offensive or inappropriate remarks or song requests!",
                    },
                    {
                        name: ":eight:",
                        value: "No abusive talk to admins or moderators (They are here to help)!",
                    },
                    {
                        name: ":nine:",
                        value: "No NSFW content! NSFW memes are allowed in <#786594678505603082> but they must be memes!",
                    },
                    {
                        name: ":one::zero:",
                        value: "Your account MUST comply with the Discord [Terms of Service](https://discord.com/terms)! Must be 13-years-old or older.",
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