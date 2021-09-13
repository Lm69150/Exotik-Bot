module.exports = {
    name: 'ping',
    description: 'Ping Command',
    execute(message, args){
        message.channel.send('20 ms');
    }, 
};