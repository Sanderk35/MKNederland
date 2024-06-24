const { Client, IntentsBitField } = require("discord.js");
const path= require("node:path");
const fs = require("fs");

require("dotenv").config();

const client = new Client({intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]});

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

client.login(process.env.TOKEN);