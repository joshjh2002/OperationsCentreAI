module.exports = {
    name: "minecraftmondays",
    description: "sends minecraft embed",
    execute(message, args, Discord) {
        if (
            message.member.roles.cache.has("651471450695270423") ||
            message.member.roles.cache.has("754810662001311816") ||
            message.member.roles.cache.has("697047262081056828") ||
            message.member.roles.cache.has("651471748214030408")
        ) {
            const embed = {
                title: "Minecraft Mondays",
                description: "On Monday 22nd March, we will be hosting our first Minecraft Monday",
                color: 10157865,
                image: {
                    url: "https://seeklogo.com/images/M/minecraft-logo-5EAD3A1535-seeklogo.com.png",
                },
                fields: [{
                        name: "Info:",
                        value: "From 5pm GMT, we'll be hopping on Minecraft and together we're going to build whatever we want. It will be awesome! We're super excited to see you there and all the awesome things you build.",
                    },
                    {
                        name: "How to join:",
                        value: "Go to <#721368768093356094> and grab the <@&754326288700801042> role. You will then have access to <#754699751093698640> where you can get the IP.\nWe hope to see you there!",
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