const { Events } = require("discord.js");
module.exports = {

    name: Events.GuildMemberAdd,
    once: false,
    execute: (member) => {
        const channel = member.guild.channels.cache.get("823865227119558657");
        channel.send("Welkom op de server, ${member.user.tag}!");
    },

    name: Events.MessageCreate,
    once: false,
    execute: (message) => {
        if (message.content === "Test") {
            const channel = message.guild.channels.cache.get("823865227119558657");
            channel.send("pong");
        }
    }

}