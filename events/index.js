const ready = require('./ready')
const messageCreate = require('./messageCreate')


module.exports = (bot) =>{
    bot.on('ready', (client)=>{
        ready(bot)
    })
    
    bot.on('messageCreate', (message)=>{
        messageCreate(bot,message)
    })

    bot.on('interactionCreate', (interaction) =>{
        require('./interactionCreate')(bot, interaction)
    })
}