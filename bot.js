const { Client } = require('discord.js');
const { botIntents } = require('./config/config');
const config = require('./config/default');
const client = new Client({
    intents: botIntents,
    partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});
const commands = {
	funny: "oigoig",
	reminder: "remind"
};

const insults = ["Kill yourself", "Go fuck yourself", "Fuck you", "Eat shit"];

const prefix = ".";
client.on('messageCreate', (msg) => {
	if (msg.author.bot && (msg.author.id == 235148962103951360)) {msg.reply(insults[Math.floor(Math.random() * insults.length)])};
	if (msg.author.id == 395211720613822474) {msg.reply(":flag_gb:")};
    if (msg.content.includes("balls")) {msg.reply(":scissors: :eggplant:")};
	if (!msg.content.startsWith(prefix)) return;
	const userCmd = msg.content.slice(prefix.length).split()[0];
	if (userCmd == "oigoig") {
		msg.reply("775249");
	}
	/*
	const userCmd = msg.content.slice(prefix.length).split()[0];
	if (userCmd == "remind") {
		const dailyTime = msg.content.slice(prefix.length).split()[1];
	}*/
});
client.login(config.DISCORD_TOKEN);