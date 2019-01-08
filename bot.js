const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("532046661233672220")
setInterval(function() {
channel.send(`AliSTOP`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
