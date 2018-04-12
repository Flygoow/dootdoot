const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = "-";
const fs = require("fs");

var servers = {};

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on('ready', function() {
    console.log("doot https://discordapp.com/oauth2/authorize?client_id=314465207260938250&scope=bot&permissions=66313280")},

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: "-doot", type: 1} })
  bot.user.setStatus("online")
}))


bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

// Commandes
  switch (args[0]) {
    case "disconnect":
        var server = servers[message.guild.id];

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

        break;
 
    case "stop":
        var server = servers[message.guild.id];

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

        break;
 
    case "doot":
        if (!message.member.voiceChannel) {
        message.channel.send('You need to connect on a voice channel first.')
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("Sounds/skulltrumpet_default.mp3")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === "-doot") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;


    default:
      "-doot // -stop"

}})

bot.login(process.env.BOT_TOKEN);
