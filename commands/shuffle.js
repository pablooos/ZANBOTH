module.exports = {
  name: "shuffle",
  description: "Zmienia losowo kolejkę",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);
    if (!serverQueue)
      return message.channel.send("Kolejka jest pusta.").catch(console.error);

    let songs = serverQueue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * (i));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    serverQueue.songs = songs;
    message.client.queue.set(message.guild.id, serverQueue);
    serverQueue.textChannel.send(`${message.author} 🔀 zmieniam losowo kolejkę`).catch(console.error);
  }
};
