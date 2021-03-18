const db = require('quick.db')
const { Discord, MessageEmbed } = require('discord.js')
 let ayarlar = require('../ayarlar.json')
 var prefix = ayarlar.prefix
 module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bunu kullanmak için gerekli yetkiye sahip değilsin!')
 
if (args[0] == 'aç') {
if(db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten açık kapatmak için .kapat`)).then(x => x.delete({timeout: 5000}));
db.set(`kufur_${message.guild.id}`, 'acik')
message.channel.send(new MessageEmbed().setDescription(`${message.author} Açık.`)).then(x => x.delete({timeout: 5000}));
}
if (args[0] == 'kapat') {
if(!db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten önceden \`kapatılmış\`. \n Açmak için: \`${prefix}reklam aç\``)).then(x => x.delete({timeout: 5000}));
db.delete(`kufur_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`${message.author} Kapalı.`)).then(x => x.delete({timeout: 5000}));
}
};
 
exports.config = {
    name: "küfür",
    guildOnly: true,
    aliases: [],
  };