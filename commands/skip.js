module.exports = {
  name: "skip",
  aliases: ['s'],
  description: "Pomija utwór",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);
    if (!serverQueue)
      return message.channel.send("Nie ma nic, co mógłbym pominąć.").catch(console.error);

    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`${message.author} ⏭ pomijam jeden utwór`).catch(console.error);
  }
};
