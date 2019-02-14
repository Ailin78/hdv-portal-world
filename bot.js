const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDgzMjgwNjQ4Mzc5ODI2MTc3.D0abng.cI-qYA7LucAlc_DoklvKIB-UYhU');
