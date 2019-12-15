const Discord  = require('discord.js');
const client = new Discord.Client;
const config = require('./config.json')

let prefix = "%"

const channelID = '655845464956076075'; // Token channel membercount 

client.on('ready', () => {
    console.log('Connecté !')
    client.user.setStatus('dnd')
    client.user
    client.user.setActivity('Être développer', {type: "PLAYING"}); // Activité du bot
});

client.on('message', message => {
    if(message.content === prefix + 'ping') {
        message.reply('Pong!')
    }

})


client.login(config.token); // Token


