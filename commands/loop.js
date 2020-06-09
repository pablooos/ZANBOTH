module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "Włącza powtarzanie się muzyki",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("Aktualnie nic nie gram.").catch(console.error);

    // toggle from false to true and reverse
    serverQueue.loop = !serverQueue.loop;
    return serverQueue.textChannel
      .send(`Powtarzanie się utworu ${serverQueue.loop ? "**włączone**" : "**wyłączone**"}`)
      .catch(console.error);
  }
};
