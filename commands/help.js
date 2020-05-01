const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle("DJ_Sona Command List")
    .setThumbnail('http://celestialbeing.org.uk/audio/djsona.png')
    .setColor("#66CC00");

    commands.forEach(cmd => {
      helpEmbed.addField(
        `${message.client.prefix}${cmd.name}`,
        `${cmd.description}`
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed);
  }
};
