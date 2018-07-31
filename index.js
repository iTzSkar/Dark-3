const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
طلب صغير ممكن تدخل :sparkles:..# 
https://discord.gg/KGEeKff **`) 

}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);

