module.exports = {
  name: "resume",
  aliases: ['r'],
  description: "Wznawia piosenkę",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return serverQueue.textChannel.send(`${message.author} ▶ wznawiam odtwarzanie muzyki!`).catch(console.error);
    }
    return message.reply("Aktualnie nic nie gram.").catch(console.error);
  }
};
