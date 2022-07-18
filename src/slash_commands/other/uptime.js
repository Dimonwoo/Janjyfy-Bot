const Discord = require('discord.js');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require(`${process.cwd()}/src/config/janjy.config.js`);
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'uptime',
    description: 'Check our uptime! 🚀',
    async execute(interaction, bot) {
      const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
   const date = new Date();
   const timestamp = date.getTime() - Math.floor(bot.uptime);
  let uptime = new Discord.MessageEmbed()
    .setTitle("<:pingms:962312529005137990> Client's Uptime")
    .setColor('#000000')	
    .setTimestamp()
    .addField(`⏱️ Uptime`, `\`\`\`${duration}\`\`\``)
    .addField(`🚀 Date Launched`, `<t:${moment(timestamp).unix()}> (<t:${moment(timestamp).unix()}:R>)`)
    .setTimestamp()
    .setFooter({ text: config.footer});
  const row = new MessageActionRow().addComponents(
     new MessageButton() // Prettier
      .setURL(`https://status.sdevs.org`)
      .setEmoji('962312521484763226')
      .setLabel("Status page")
      .setStyle("LINK")
    );
  interaction.reply({ content: " ", embeds: [uptime], components: [row] })
}
};
