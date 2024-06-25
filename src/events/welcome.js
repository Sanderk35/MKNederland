const { Events, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require("discord.js");
module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    execute: (member) => {
        const channel = member.guild.systemChannel;

        const row = new ActionRowBuilder();
        row.components.push(
            new ButtonBuilder()
                .setCustomId(`1255064036928651315_${member.id}`)  // Uniek ID voor de knop
                .setLabel("Trial")  // Tekst op de knop
                .setStyle(ButtonStyle.Secondary), // Kleur van de knop

            new ButtonBuilder()
                .setCustomId(`1255064092243263541_${member.id}`)  // Uniek ID voor de knop
                .setLabel("Ally")  // Tekst op de knop
                .setStyle(ButtonStyle.Secondary) // Kleur van de knop
        );

        const embed = new EmbedBuilder()
            .setTitle("Welkom bij de server!")
            .setDescription(`${member}, welkom bij de server! Kies hieronder je rol.\n\n**Trial** - Je wilt graag het team en/of competitive Mario Kart uitproberen.\n**Ally** - Je zit al in een team en je wilt bijspringen als er te weinig spelers zijn.`)
            .setColor("#FF9400");

        channel.send({
            embeds: [embed],
            components: [row]
        });
    },
}
