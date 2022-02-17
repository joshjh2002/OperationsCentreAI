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
                title: "Welcome to the Operation Centre - a community designed for bringing people together!",
                description: "Our community welcomes all types of people from gamer's to content creator's, people come here to meet new people, join in on the fun events and feel a part of something. We take pride in being a friendly and helpful community with our very own Rust and Minecraft servers, which are welcoming new players each day. \n\nIf you have any questions or need help with something don't hesitate to ask one of our <@&651471748214030408>.",
                color: 16347474,
                image: {
                    url: "https://media.discordapp.net/attachments/651470578741542936/813790022657638420/Operations_Logo.png",
                },
                fields: [{
                        name: "Information:",
                        value: "<#651468992946503680> - Stay up to date with the latest community news, updates and events.\n<#651468903490519040> - The rules of our discord server that must be read and followed by everyone.\n<#721368768093356094> - Pick your server roles in order to gain access to exclusive channels.\n<#728261669377146891> - Donate towards the running or upgrading costs of our servers.",
                    },
                    {
                        name: "Media:",
                        value: "<#651469512662712320> - Use the bot commands to request and listen to  your favourite songs.\n<#743042554593017876> - Share your favourite screenshots, pictures or even selfies.\n<#710797624986566666> - Link us that funny YouTube video or post your own videos.\n<#667796238384758792> - Post your best memes and have a laugh with the rest of the community.",
                    },
                    {
                        name: "Our Servers:",
                        value: "**Rust** - Survive the harshness of the wild and other players, build to survive and scavenge for the best loot!\nAdmins: <@697595109415583756> and <@153509246330339328>.\n\n**Minecraft** - Join in on the creation of our very own town/city as we aim to expand it to a metropolis.\nAdmins: <@339095443503972352> and <@362647384502697984>",
                    },
                    {
                        name: "Social Media:",
                        value: ":steam: [Steam](https://steamcommunity.com/groups/operations-centre)\n:facebook: [Facebook](https://www.facebook.com/OperationsCentre)\n:instagram: [Instagram](https://instagram.com/operations_centre?igshid=ca1z2fkgwq4r)\n:twitter: [Twitter](https://twitter.com/OperationsCent)\n:youtube: [YouTube](https://www.youtube.com/channel/UCm-FUo4TagET2kA-JpVpwWw)",
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