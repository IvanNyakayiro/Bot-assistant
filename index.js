const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("on Beta_Testing!");

});


bot.on("message",async message =>{
	if(message.author.bot) return;
	if (message.chanel.type === "dm") return;
  
	let prefix = botconfig.prefix;
	let messaArray = message.content.split(" ");
	let cmd = messaArray[0];
	let args = messageArray.slice(1);

	if(cmd === `${prefix}hello`){ //here is the issue!!!
	return message.channel.send("Hello!");
	}

});

bot.login(botconfig.token);
