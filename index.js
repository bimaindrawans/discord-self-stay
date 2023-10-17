const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()
const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
    console.log('Ready!', client.user.tag);
    await client.user.setHypeSquad('HOUSE_BRILLIANCE'); // Define Discord Squad
    	const channel = client.channels.cache.get("Your Voice Channel ID"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: true,
			});
		  }, 60000) // Set the delay to reconnect to the same voice channel if Someone trying to disconnect your account (in millisecond)
		});   
    const r = new RichPresence() // Define Custom RPC
	.setApplicationId('Your Appliaction ID')
	.setType('PLAYING')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
	.setState('Your State')
	.setName('Your Application Name')
	.setDetails('Details Application')
	.setParty({
		max: 5,
		current: 3,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('Your Assets ID')
	.setAssetsLargeText('Assets Detail')
	.addButton('Set Button', 'Your Link')

    await client.user.setPresence({
        status: 'online',
        activities: [r],
    });

client.login(process.env.TOKEN)
