const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDAwMzM0MzI4MDU3NTYxMDk4.DUJaeA.BFS-gClUk5xEj-Eo9H6ihXp1D0I);
