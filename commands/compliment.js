module.exports = async (bot,message,args, argsF) =>{

    console.log(args,argsF)
    
    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

    const compliments = ["Кристина милашка!!!","Кристина обояшка!!!","Кристина лучшая!!!","Кристина потрясающая!!!", "Кристина лучшая девочка в мире!!!!", "Кристина милейшкая булочка в мире"]

    message.channel.send({
        content : compliments[randomInteger(0,5)]
    });
}

module.exports.names = ["compliment", "комплимент"];
module.exports.interaction = {
    name : "compliment",
    description : "hm..",
    options : [
        {
            name : "any",
            description : "compliment",
            type : 'STRING',
            required : false
        }
    ],
    defaultPermission : true
}