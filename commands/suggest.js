const Discord = require('discord.js');
let config = require('../config.json');

module.exports = {
    name: 'suggest',
    description: 'Donner une suggestion au serveur',
    execute(message, args){
      if(message.channel.id === config.CHANNELS_ID.SUGGESTIONS){
        
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        let suggestion = args.join(" ");
        if (!suggestion)
        {
          let emptyEmbed = new Discord.MessageEmbed()
        .setTitle("Oups!")
        .setColor("#fc2403")
        .setDescription(`Wsh <@${message.author.id}>, Spécifie ta suggestion!`);
        message.channel.send(emptyEmbed).then((msg) =>{
            setTimeout(() =>{
              msg.delete();
            },4000);
          });
          message.delete();
        }
        else{
          let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(randomColor)
            .setTitle("Nouvelle Suggestion")
            .setDescription("```fix\n "+suggestion+"\n```")
            .setFooter('Envoyé by: '+message.author.tag,  `${config.SERVER_LOGO}`)
            .setTimestamp(new Date());
          message.channel
            .send(embed)
            .then((message) => {
              const sent = message;
              sent
                .react("👍")
                .then(() => {
                  sent
                    .react("👎")
                })
                .catch(console.error);
            })
            .catch(console.error);
          return message.delete();

        }

      }else{
        message.delete();

        let wEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#fc2403")
        .setDescription(`Mauvaise chaîne pour faire des suggestions, utiliser <#${config.CHANNELS_ID.SUGGESTIONS}> faire une suggestion`);
        message.channel.send(wEmbed).then((wmsg) =>{
          setTimeout(() =>{
            wmsg.delete();
          },5000);
       });
      }
        
         
        
    }, 
};