const { Intents } = require('discord.js');
const {
  DIRECT_MESSAGES,
  GUILD_MESSAGES,
  GUILDS,
} = Intents.FLAGS;
const botIntents = [
  DIRECT_MESSAGES,
  GUILD_MESSAGES,
  GUILDS,
];
module.exports = { botIntents };