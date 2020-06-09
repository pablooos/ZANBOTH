const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nowplaying",
  aliases: ['np'],
  description: "Pokazuje aktualnie odtwarzaną piosenkę",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("Aktualnie nic nie gram.").catch(console.error);
    const song = serverQueue.songs[0];

    let nowPlaying = new MessageEmbed()
      .setTitle("Aktualnie gram")
      .setDescription(`${song.title}\n${song.url}`)
      .setColor("#F8AA2A")
      .setAuthor("ZanBot")
      .setTimestamp();

    if (song.duration > 0) nowPlaying.setFooter(new Date(song.duration * 1000).toISOString().substr(11, 8));

    return message.channel.send(nowPlaying);
  }
};
