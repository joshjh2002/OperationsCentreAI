module.exports = {
    name: "conanlink",
    description: "sends conan embed",
    async execute(message, args, Discord, client) {
        message.author.send("https://operationscentre.github.io/community/join-conan");
        message.delete();
        client.channels.cache.get('887374258576162816').send(message.author.toString() + " had requested the Conan Server link.");
    },
};