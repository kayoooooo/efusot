const { Client } = require('discord.js');
const fs = require('fs');
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
	reminder: "remind",
	insult: "insult"
};

const insults = ["Kill yourself", "Go fuck yourself", "Fuck you", "Eat shit"];

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
 }

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
	if (userCmd == "sus") {
		msg.channel.send(":face_with_raised_eyebrow: :camera_with_flash:").then((sentMessage) => {sleep(200); sentMessage.edit(":face_with_raised_eyebrow: :camera:")})
	}
	/*
	if (userCmd == "remind") {
		const dailyTime = msg.content.slice(prefix.length).split()[1];
	}*/
	/*
	if (userCmd == "insult") {
		//takes in parameters user, probability, and time. Time is when insulting stops.
		params = msg.content.slice(prefix.length).split();
		if (params.length > 4) {
			msg.channel.send("Invalid number of parameters!");
			return;
		}
		else {
			user = params[1];
			uid = int(user.substring(9,-1));
			inslt = {
				"user" : uid,
				"prob" : params[2],
				"time" : params[3]
			}
			data = JSON.stringify(inslt);
			fs.writeFile("./insult.json", data);
		}
	*/
});
client.login(config.DISCORD_TOKEN);