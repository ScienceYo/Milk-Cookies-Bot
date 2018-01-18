const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
    
    
});

client.on('message', message => {
    if (message.content === 'milk') {
    	message.channel.send('Here is a picture of milk:');
  	}
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Thank you for using this bot, find the list of commands on the website.');
  	}
});

client.on('message', message => {
    if (message.content === 'cookie') {
    	message.channel.send('Here is a picture of a cookie:');
  	}
});

client.on('message', message => {
    if (message.content === 'version') {
    	message.channel.send('Version 0.1 A');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
