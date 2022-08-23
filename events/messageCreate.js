module.exports = (bot,message) =>{
    if(message.author.bot){
        return;
    };
    const {content} = message;

    const messageArray = content.toLowerCase().split(' '), 
    command = messageArray[0],
    args = messageArray.slice(1),
    messageArrayFull = content.split(' '), 
    argsF = messageArrayFull.slice(1),
    commandRun = bot.commands.get[command];

    if(commandRun) commandRun(bot,message,args, argsF)
    .catch(error => console.log(error));

    console.log(message.content);
    if(message.content == "ping"){
        message.channel.send({
            content : "pong",
        });

    }

}