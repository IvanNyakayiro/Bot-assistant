const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("on Beta_Testing!");

});

bot.on("message", (message) =>{
	if(message.content.startsWith("!ping")){
		message.channel.send("pong!");
	}
	if(message.content.startsWith("!hello")){
		message.channel.send("Hello!");
	}
	if(message.content.startsWith("!hey")){
		message.channel.send("hey!");
	}
	if(message.content.startsWith("!help")){
		message.channel.send("How can I help!");
	}

});

bot.on("guildMemberAdd", (member) =>{
	const guild = member.guild;
	if(!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
		newUsers[guild.id].set(member.id, member.user);

		if(newUsers[guild.id].size > 10){
			const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    	guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
    	newUsers[guild.id].clear();
		}
});

bot.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});
/*
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
*/
bot.login(botconfig.token);
