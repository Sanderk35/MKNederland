const {Events, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    execute: async (interaction) => {
        const { customId } = interaction;

        const trialRow = new ActionRowBuilder();
        trialRow.components.push(
            new ButtonBuilder()
                .setCustomId(`1255064036928651315`)  // Uniek ID voor de knop
                .setLabel("Trial")  // Tekst op de knop
                .setStyle(ButtonStyle.Success) // Kleur van de knop
                .setDisabled(true),

            new ButtonBuilder()
                .setCustomId(`1255064092243263541`)  // Uniek ID voor de knop
                .setLabel("Ally")  // Tekst op de knop
                .setStyle(ButtonStyle.Secondary) // Kleur van de knop
                .setDisabled(true),
        );
        const allyRow = new ActionRowBuilder();
        allyRow.components.push(
            new ButtonBuilder()
                .setCustomId(`1255064036928651315}`)  // Uniek ID voor de knop
                .setLabel("Trial")  // Tekst op de knop
                .setStyle(ButtonStyle.Secondary) // Kleur van de knop
                .setDisabled(true),

            new ButtonBuilder()
                .setCustomId("1255064092243263541")  // Uniek ID voor de knop
                .setLabel("Ally")  // Tekst op de knop
                .setStyle(ButtonStyle.Success) // Kleur van de knop
                .setDisabled(true),
        );

        try {
            if (!interaction.isButton()) return;
            await interaction.deferReply({ephemeral: true});

            const [roleId, memberId] = interaction.customId.split("_");

            if (memberId === interaction.member.id) {

                if (roleId === "1255064036928651315") {
                    const roleId = "1255064036928651315";
                    const role = interaction.guild.roles.cache.get(roleId);
                    const member = interaction.member;
                    await member.roles.add(role);
                    await interaction.editReply("Je hebt de rol Trial gekregen!", {
                        ephemeral: true,
                        components: [trialRow]
                    });
                    await interaction.message.edit({components: [trialRow]});
                } else if (roleId === "1255064092243263541") {
                    const role = interaction.guild.roles.cache.find(role => role.name === "Ally");
                    const member = interaction.member;
                    await member.roles.add(role);
                    await interaction.editReply("Je hebt de rol Ally gekregen!", {ephemeral: true});
                    await interaction.message.edit({components: [allyRow]});
                }
            }
            else {
                await interaction.editReply({content: "Je kunt deze knop niet gebruiken!", ephemeral: true});
            }
        }
        catch (error) {
            console.log(error)
            console.log(`Gebruiker: ${interaction.user.tag} heeft geklikt op knop met ID: ${customId}`);
            await   interaction.editReply({content: `Er is iets fout gegaan: ${error}`, ephemeral: true});
        }
    }
}