module.exports = {
  name: "stop",
  description: "Zatrzymuje odtwarzane piosenki",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);
    if (!serverQueue) return message.reply("Nie ma nic, co mógłbym zatrzymać.").catch(console.error);

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`${message.author} ⏹ zatrzymuję muzykę!`).catch(console.error);
  }
};
