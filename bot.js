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
    if (message.content === 'mc! discord') {
    	message.channel.send('Join our Discord to hang out and talk about improving the bot: https://discord.gg/akAvdkv');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! uh') {
    	message.channel.send('/tts uuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! help') {
    	message.channel.send('```List of commands: \n mc! help: Displays this menu. \n mc! cookie: Displays a picture of a cookie. \n mc! milk: Displays a picture of milk. \n mc! version: Bot version. \n mc! info: Shows information about the bot. \n mc! discord: discord link. \n mc! agree: Make the bot agree. \n mc! disagree: Make the bot disagree. /n ??????: secret command. ```');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! cookie') {
    	message.channel.send('Here is a picture of a cookie: https://goo.gl/qqWfGP');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! agree') {
    	message.channel.send('I agree!');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! disagree') {
    	message.channel.send('I disagree!');
  	}
});

client.on('message', message => {
    if (message.content === 'mc! version') {
    	message.channel.send('Version 0.2 A');
  	}
});


client.on('message', message => {
    if (message.content === 'mc! info') {
    	message.channel.send('My name is Milk & Cookies Bot. I was made by Science Yo#1743 in one day. I do alot of useless stuff but I think you will enjoy it!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
