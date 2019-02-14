
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
client.login(NDgzMjgwNjQ4Mzc5ODI2MTc3.D0abng.cI-qYA7LucAlc_DoklvKIB-UYhU);
