const { MessageEmbed } = require("discord.js")
const config = require('../config/stoneclane.config.json')

module.exports = {
    name: 'projects',
    description: 'View all our Projects',
    run: async (client, interaction) => {
      let projects_embed = new MessageEmbed()
		  .setColor('#000000')	
			.setTitle('**__Stoneclane Developments Projects__**')
			.addField("GiveAways", `https://giveaways-bot.com`, true)
            .addField("TrestHost", `https://tresthost.com`, true)
            .addField("Zerion (Soon!)", `https://zerion.codes`, true)
            .addField("Stoneclane.xyz", `https://stoneclane.xyz`, true)
            .addField("Viridian.ml", `https://viridian.ml`, true)
            .addField("Praxive (Soon!)", `https://praxive.sdevs.org`, true)
            .addField("Stoneclane Studios", `https://discord.gg/5t6S5T53Kd`, true)
			.setTimestamp()
			.setFooter(`${config.footer}`);
        interaction.reply({
          embeds: [projects_embed]
        });
    },
};