const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute: (client) => {
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setPresence(
            {
                status: "online"
            }
        );
        const guild = client.guilds.cache.get("1255063802903400529");
        const channel = guild.channels.cache.get("1255063804757409794")
        // channel.send("Bot is online!");
    }
}

