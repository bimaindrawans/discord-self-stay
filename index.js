const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()

const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');

const client = new Client();

client.on("ready", async () => {
	console.log(`✅ ${client.user.username} Started Online`);
  client.user.setHypeSquad('HOUSE_BRILLIANCE');
  client.user.setPresence({ activities: [r],});
	const {joinVoiceChannel} = require('@discordjs/voice');
	const channel = client.channels.cache.get("Your Voice Channels ID"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: true,
			});
		  }, 6000)
		});   
    
const r = new RichPresence() 
	.setApplicationId('1159018870401675276')
	.setType('PLAYING')
	.setURL('link')
	.setState('Set State')
	.setName('Set Name')
	.setDetails('Set Details')
	.setParty({
		max: 5,
		current: 3,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('Assets ID')
	.setAssetsLargeText('Set Description Assets')
	.addButton('Custom Button', 'Button Link')

client.login(process.env.TOKEN)
