module.exports = {
  name: "rustlink",
  description: "sends rust join link",
  async execute(message, args, Discord, client) {
    message.author.send(
      "https://operationscentre.github.io/community/join-rust"
    );
    message.delete();
    client.channels.cache
      .get("947811153092964382")
      .send(message.author.toString() + " had requested the Rust Server link.");
  },
};
