module.exports = {
  name: "remove",
  description: "Usuwa wybraną piosenkę z kolejki",
  execute(message, args) {
    if (!args.length) return message.reply(`Użycie: ${message.client.prefix}remove <Numer piosenki w kolejce>`);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("Nie ma kolejki.").catch(console.error);

    const song = serverQueue.songs.splice(args[0] - 1, 1);
    serverQueue.textChannel.send(`${message.author} ❌ usuwam **${song[0].title}** z kolejki.`);
  }
};
