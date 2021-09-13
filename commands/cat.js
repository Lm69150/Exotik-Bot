const Discord = require('discord.js');
const axios = require('axios');
let config = require('../config.json');
module.exports = {
    name: 'cat',
    description: 'cat Command',
     async execute(message, args){
    
        if(message.channel.id === config.CHANNELS_ID.ANIMALS){

            const url = 'https://some-random-api.ml/img/cat';

            let data, response;
            try {
                response = await axios.get(url);
                data = response.data;
            } catch (e) {
                return message.channel.send(`Une erreur s'est produite, réessayez !`)
            }
    
            const embed = new Discord.MessageEmbed()
                .setTitle(`Cat: `)
                .setColor('#f3f3f3')
                .setImage(data.link)
    
            await message.channel.send(embed)

        }
        else{
            message.delete();

            let wEmbed = new Discord.MessageEmbed()
            .setTitle("Oups!")
            .setColor("#fc2403")
            .setDescription(`Mauvais channel pour publier des chats, utilisez <#${config.CHANNELS_ID.ANIMALS}> au lieu`);
            message.channel.send(wEmbed).then((wmsg) =>{
              setTimeout(() =>{
                wmsg.delete();
              },4000);
           });
        }

        

    }, 
};