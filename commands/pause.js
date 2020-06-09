module.exports = {
  name: "pause",
  description: "Wstrzymuje piosenki",
  execute(message) {
    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true);
      return serverQueue.textChannel.send(`${message.author} ⏸ wstrzymuję granie.`).catch(console.error);
    }
    return message.reply("Aktualnie nic nie gram").catch(console.error);
  }
};
