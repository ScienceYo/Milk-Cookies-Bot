
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ';hello') {
    	message.reply('Hello!');
  	}
});

client.on('message', message => {
    if (message.content === ';help') {
    	message.reply('Thank you for using Milk & Cookies Bot. The default prefix is ;. Find a list of commands on the site.');
  	}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
