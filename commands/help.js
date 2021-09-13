  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
let config = require('../config.json');
module.exports = {
    name: 'help',
    description: 'help Command',
    execute(message, args){
        const Fivem = new Discord.MessageEmbed()
        .setTitle('FiveM')
        .setColor('#ffaa17')
        .addField(`${config.PREFIX}status`, 'Voir le status du serveur')
        .addField(`${config.PREFIX}playerlist`, 'Voir les joueur connecté au serveur')
        .addField(`${config.PREFIX}suggest`, 'Faire une suggestion au serveur ')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setColor('#1764ff')
        .addField(`${config.PREFIX}meme`, 'Afficher des meme (Troll)')
        .addField(`${config.PREFIX}cat`, 'Afficher des images de chat (Troll)')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setColor('#9500f2')
        .addField(`${config.PREFIX}ping`, 'afficher le ping du bot')
        .addField(`${config.PREFIX}clear <1-99>`, 'Clear le chat')
        .setTimestamp()

        const pages = [
                Fivem,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }, 
};