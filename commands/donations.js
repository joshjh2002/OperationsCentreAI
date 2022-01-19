module.exports = {
    name: "donations",
    description: "sends donations embed",
    execute(message, args, Discord) {
        if (
            message.member.roles.cache.has("651471450695270423") ||
            message.member.roles.cache.has("754810662001311816") ||
            message.member.roles.cache.has("697047262081056828") ||
            message.member.roles.cache.has("651471748214030408")
        ) {
            const embed = {
                title: "Donations!",
                description: "All donations are greatly appreciated and will go towards the upkeep, upgrade and expansion of our community servers. There are 2 ways in which you can donate:",
                color: 228607,
                image: {
                    url: "https://media.discordapp.net/attachments/651470578741542936/813790022657638420/Operations_Logo.png",
                },
                fields: [{
                        name: "Patreon:",
                        value: "If you're feeling generous and would like to help us grow our community and be part of it along our journey then you can become a Patreon subscriber, starting at £3 per month. This helps us a lot with the server costs and in returns rewards you with additional benefits.\n\nBenefits include: Discord roles, server titles, additional in-game features and even custom features.\n\nYou can subscribe [here](https://www.patreon.com/opcentre)",
                    },
                    {
                        name: "Donate:",
                        value: "If you would like to make a one-time donation towards our community you can do so through PayPal. This will help us with the community server costs and would be really appreciated.\n\nDonations and server boosts will gain you the <@&810882948709613639> Discord role and VIP Minecraft title.\n\nYou can make a donation [here](https://paypal.me/pools/c/8quGTqBY1J)",
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