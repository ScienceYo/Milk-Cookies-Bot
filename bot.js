const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === 'mc! milk') {
    	message.channel.send('Here is a picture of some milk: https://goo.gl/upNXQ7');
  	}
});

client.on('message', message => {
    if (message.content === 'mc!') {
    	message.channel.send('Thank you for using this bot, find the list of commands on the website.');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! cookie') {
    	message.channel.send('Here is a picture of a cookie: https://goo.gl/qqWfGP');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! version') {
    	message.channel.send('Version 0.1 A');
  	}
});


client.on('message', message => {
    if (message.content === 'mc! version') {
    	message.channel.send('My name is Milk & Cookies Bot. I was made by Science Yo#1743 in one day. I do alot of useless stuff but I think you will enjoy it!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
