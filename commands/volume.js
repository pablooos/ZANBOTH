module.exports = {
  name: "volume",
  aliases: ['vol'],
  description: "Zmienia głośność bota",
  execute(message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);
    if (!serverQueue) return message.reply("Aktualnie nic nie gram.").catch(console.error);

    if (!args[0])
      return message.reply(`🔊 Aktualny stan głośności: **${serverQueue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Proszę podać liczbę żeby zmienić głośność.").catch(console.error);
    if (parseInt(args[0]) > 150 || parseInt(args[0]) < 10)
      return message.reply("Limit 10 - 150.").catch(console.error);

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return serverQueue.textChannel.send(`Głośność ustawiona na: **${args[0]}%**`).catch(console.error);
  }
};
