const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/album/2hEnymoejldpuxSdTnkard?si=e7kUx42IQX2Atdd6Q3WPWg")
    }
}