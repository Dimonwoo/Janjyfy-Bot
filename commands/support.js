const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const config = require(`${process.cwd()}/janjy.config.js`);
const colors = require(`${process.cwd()}/janjy.colors.js`);

module.exports = {
    name: "support",
    description: "Join our support server.",
    options: [],
    run: async (client, interaction) => {

      const components = new MessageActionRow()
      .addComponents(
        new MessageButton()
              .setLabel('Support Server')
              .setEmoji("<a:supportsrv:999736847607537805>")
              .setURL(`${config.supportDiscord}`)
              .setStyle('LINK'),
      )

       const supportEmbed = new MessageEmbed()
        .setTitle('Hey, you want to join our Support Server?')
        //.setAuthor({ text: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setColor(colors.main)
        .setDescription(`**You can join our support server by pressing the** \`Support Server\` button below.`)
        .setFooter(config.footer)
        
            await interaction.reply({
              embeds: [ supportEmbed ],
              components: [ components ]
            });
          }
        };