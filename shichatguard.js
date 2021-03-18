const Discord = require("discord.js")     
const client = new Discord.Client();      
const ayarlar = require("./ayarlar.json")    
const ayar = require("./settings.json")   
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection(); 
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);  
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`newchatguard`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name); 
    });
  });
})

client.login(ayarlar.token)



///////////CAPSENGEL
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
      let shicaps = msg.content.toUpperCase();
      if (msg.content == shicaps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Caps açamazsın !`)).then(x => x.delete({timeout: 5000}));
              
          }
        }
      }
    }
});
////////////reklamengel
client.on("message", msg => {
  const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
  if (reklam.some(shi => msg.content.includes(shi))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();
              return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Reklam atamazsın !`)).then(x => x.delete({timeout: 5000}));
msg.delete(3000);                              
      }              
    } catch(err) {
      console.log(err);
    }
  }
});

//////küfürengel////////////
client.on("message", msg => {
  const küfür =  ["oç", "orospu çocuğu", "orospu cocu", "orspucocu", "OÇ", "OROSPU ÇOCUĞU",  "yarrak", "sikik", "aq", "sik", "amk", "amına kodum", "Oç"];
  if (küfür.some(shi => msg.content.includes(shi))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();
              return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Küfür edemezsin !`)).then(x => x.delete({timeout: 5000}));
msg.delete(3000);                              
      }              
    } catch(err) {
      console.log(err);
    }
  }
});
///////everhere///////engel
client.on("message", async function(msg) {
if (!msg.guild) {} else {
if (msg.author.id == msg.guild.ownerID) {} else {
  
if (msg.content.includes("@everyone")) {
  
msg.delete();
return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Everyone atamazsın !`)).then(x => x.delete({timeout: 5000}));
  
} else {}
  
if (msg.content.includes("@here")) {
  
msg.delete();
return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Here atamazsın !`)).then(x => x.delete({timeout: 5000}));
  
} else {}
  
}
}
});
