const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();


let db = require("megadb")
let canales = new db.crearDB("canales")




var Weez = require("weez");
var weez = new Weez.WeezAPI("dHelrAqzC3EDk6AP028wRsGMdEik8zSwwa5p");
const nekos = require('nekos.life');
const neko = new nekos();
const osu = require('node-osu');
const api = new osu.Api("6f55a47fd3af51e5efa1046a50697503442df67b") 

//Llamas al npm y creas la db  

//AGREGRE LA SIGUIENTE LINEA DE CONFIG AL ARCHIVO DEL BOT
const config = require("./config.json");















client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (actividades.length - 1) + 1);
        client.user.setPresence({
            status: "online",
            game: {
                name: actividades[index],
                type: "STREAMING",
                url: 'https://www.twitch.tv/BaztyMilos'

            }
        })

    }, 3000 );
  
  
  
  
    
  
  
});


const actividades = [


 "📃 ┊ m!invite ",
" 🔨 ┊ Usa m!comandos",
"📃 ┊ m!invite" ,
   `🛠 ┊ Version 1.0 `,
];


 


































let prefix = config.prefix;





client.on("guildCreate", async guild => {
  
let canal = client.channels.get("734879328059392092")

  const embed = new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
    .setTitle("Estoy en un nuevo server")
 .addField("Server", guild.name, true)
    .addField("Miembros", guild.memberCount, true)
    .addField(
      "Dueño",
      guild.owner.user.username +
        "#" +
        "" +
        guild.owner.user.discriminator +
        "",
      true
    )
    .setTimestamp()
    .setColor("B40486")
    .setFooter(guild.name, guild.iconURL);

  canal.send({ embed });
});











client.on("message", async message => {
  
  
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Si el mensaje contiene "ping"
  if(message.content === 'Hola') {


    // En el canal que fue enviado responderá
    message.channel.send('Hola!')
  }
  
 


  // Si el mensaje contiene "ping"
  

if(message.content === 'mai de mierda') {
  let random2 = ["Creo que te refieres a tu madre.", //loser
                 "Piensa bien lo que dices, no eres nadie para decirme eso.", //draw
                 "gay"] //win
  
  message.reply(` ${random2[Math.floor(Math.random() * random2.length)]}`)

 
    }


  
if(!message.content.startsWith(prefix)) return; //Si el contenido del mensaje no empieza por el prefix no hará nada de lo que este abajo
 
  














if(command === "perfil"){

let estadouser = {


   "online":"Online", 
   "idle":"Ausente",
   "dnd":"No Molestar",
   "invisible":"Invisible/Desconectado",
 } 


let userm = message.mentions.users.first()

if(!userm){
  var user = message.author;

  const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor('Info de ' + user.username+'#'+user.discriminator, user.avatarURL)
    .setColor("RANDOM")  
    .addField('Nombre', user.username, true)
    .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
    .addField('ID', user.id, true)
    .addField('Estado', estadouser[user.presence.status], true)
    .addField('Cuenta Creada', user.createdAt.toDateString(), true)
    .addField('Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
    .setFooter('MaiBot', client.user.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual

  message.channel.send(embed);


}else{

  const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor('Info de ' + userm.username+'#'+userm.discriminator, userm.avatarURL)
    .setColor("RANDOM")
    .addField('Nombre', userm.username, true)
    .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
    .addField('ID', userm.id, true)
    .addField('Estado', estadouser[userm.presence.status], true)
    .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
    .addField('Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual


  message.channel.send(embed)

}


}





if(command === "servidores"){


  if(!["329728108485672960"].includes(message.author.id)) return message.channel.send("Esté Comando es Privado, No Tienes Permisos")
  

  const Discord = require('discord.js')
  const embed = new Discord.RichEmbed()
  
  
  .setColor("RANDOM")
  .setTitle("MaiBot")
  .addField(`Servidores:`, client.guilds.map(guild => guild.name).join("\n\n\n"))
  
  
    message.channel.send(embed)

}











 if(message.content.startsWith("m!say")){  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**``Permisos insuficientes, debes tener el permiso MANAGE_MESSAGES``**") 
                   
                        
      
    let argsresult; 
    let mChannel = message.mentions.channels.first() 
    


let texto = args.join(" "); 
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot | Útil", client.user.avatarURL)
  .setDescription ( "**Debes escribir el mensaje**")
  .addField("Ejemplo : ", "**m!say [#canal] (Mensaje)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);

    

if (message.deletable) message.delete();


     if(mChannel){  
      let argsresult = args.slice(1).join(" ");  
      mChannel.send(argsresult)  
    } else{
      
      argsresult = args.join(" ") 
      message.channel.send(argsresult)  
    }
    }
     









  

if(command === "botinfo"){
    let embed = new Discord.RichEmbed()  
.setTitle('MaiBot ┆ Ayuda') 
.setDescription('**Comandos de MaiBot**')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor('BLUE')
.addField('`Desarrollador:`', '`Tag:` <@329728108485672960>\n`ID:`329728108485672960')
.addField('`General:`', '`Nombre:` MaiBot\n`Mi prefix:` m!\n`Fecha de creación:`07/05/2020\n `Invitación:` [Click aquí](https://discord.com/api/oauth2/authorize?client_id=708099353675300924&permissions=8&scope=bot)\n`Invitación al server soporte:` [Click aquí](https://discord.gg/3AeshnS)')
.addField('`Estadisticas:`', '`Servidores` '+client.guilds.size+'\n`Usuarios:` '+client.users.size+'\n `Ping:` '+Math.floor(client.ping)+'')
.setThumbnail(client.user.displayAvatarURL)
    message.channel.send(embed)
   
  
  
    }









if(command === "clear"){


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**`Permisos insuficientes, necesitas el permiso MANAGE_MESSAGES`**") 

let mensajes = args.join(" "); 
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot | Útil", client.user.avatarURL)
  .setDescription ( "**Debes escribir cuanto quieres borrar**")
  .addField("Ejemplo : ", "**m!clear 3**")
  .setColor("RANDOM")
  

  if(!mensajes)  return  message.channel.send(embud);
 let number = args[0]
  if(isNaN(number)) {

    return message.channel.send('Ingresa un numero valido')
}
if (mensajes > 100) return message.channel.send("No puedes borrar mas de 100 mensajes")
message.channel.bulkDelete(mensajes);

  
  
  
 
}








  const ms = require("ms")

if (command === "mute") {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**`Permisos insuficientes, Debes tener el permiso MANAGE_MESSAGES**`") 

    let tomute =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    
    let texto = args.join('')
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Moderacion", client.user.avatarURL)
  .setDescription ( "Debes poner todo correctamente")
  .addField("Ejemplo : ", "**m!mute (@Mencion) (Tiempo) [razón]**")
  .setColor("RANDOM")
  
 if(!tomute)  return  message.channel.send(embud);
  




    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedes mutear a este usuario");
    let muterole = message.guild.roles.find(`name`, "Muteado");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#2c2f33",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermission(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    let razon = args.slice(2).join(" ") || "Razón no especificada ";

    
    if (!razon) return message.channel.send("Debes poner una razón");

   
    let mutetime = args[1];



    if (!mutetime) return message.reply("No especificaste el tiempo.\n\n  **Formato: (s (Segundo) | h (Hora) / d (Dia))**");



    await tomute.addRole(muterole.id); // ponlos en el ultimo del todo, pero, no te atravieses, con otros comandos
    const muteadoxd = new Discord.RichEmbed()
      .setTitle("Nuevo mute del staff")
      .addField(`Usuario Muteado`, `**${tomute}**`)
      .setColor("BLUE")
      .addField(`Staff`, `**${message.author.username}**`)
      .addField(`Tiempo`, `**${mutetime}**`)
      .addField("Razón", `**${razon}**`);

    message.reply(muteadoxd);

    
    setTimeout(function() {


      tomute.removeRole(muterole.id);
      
    }, ms(mutetime));
  }










  
  
  
if(command === "comandos"){

    let embed = new Discord.RichEmbed()   
.setTitle('MaiBot ┆ Ayuda')
.setDescription('**Comandos de MaiBot**')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor('RED')
.addField(' •  Comandos útiles • ', ' \n**`botinfo`**, **`perfil`** **`invite`**, **`say`**' ) // El tercer valor es opcional, Default es false
.addField(' •  Diversión • ', '**`avatar`**, **`8ball`**, **`basura`**, **`trump`**, **`cachipun`**' ) // El tercer valor es opcional, Default es false
.addField(' • Anime • ', '**`sharingan`**, **`te`**, **`waifu`**')// El tercer valor es opcional, Default es false
.addField(' •  Reacciones • ', '**`slap`**, **`kiss`**, **`tickle`**, **`hug`**, **`poke`**, **`cry`**, **`yandere`**, **`feed`**, **`no`**, **`like`**, **`dance`**, **`happy`**' ) // El tercer valor es opcional, Default es false
.addField(' •  Moderación • ', '**`kick`**, **`ban`**, **`clear`**, **`mute`**' ) // El tercer valor es opcional, Default es false
.setThumbnail(client.user.displayAvatarURL)
    message.channel.send(embed)
  
  
  
    }
  


if(command === "reset"){
if(!["329728108485672960"].includes(message.author.id)) return message.channel.send("Esté Comando es Privado, No Tienes Permisos")
      const reload = new Discord.RichEmbed()
        .setTitle('**Realizando el reset**')
        .setDescription('`Espera 5 Segundos`')
        .setThumbnail(`https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F7CXik3O.gif?v=1591476952573`)
        .setColor(0x77AEFF)
        .setFooter('Pedido por '+ message.author.username +'')             
      message.channel.send(reload).then(() => {
                client.destroy().then(() => {
                  process.exit();
             });
         });



  
    
  
}

  



  
  
  
  



 
  if(command === 'ban'){

      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**`Permisos insuficientes, Debes tener el permiso BAN_MEMBERS`**") 



        let user = message.mentions.users.first(); 
        let razon = args.slice(1).join(' ');
    
    
      


let texto = args.join('')
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Moderacion", client.user.avatarURL)
  .setDescription ( "Debes poner todo correctamente")
  .addField("Ejemplo : ", "**m!ban (@Mencion) [razón]**")
  .setColor("RANDOM")
  
 if(!texto)  return  message.channel.send(embud);





        if (user.id === message.author.id) return message.channel.send("¿Porque harias eso?");
        if (user.id === client.user.id) return message.channel.send("¡No puedes banearme!")
              if (!message.guild.member(user).bannable) return message.reply('No puedo banear a este usuario');


        
       message.guild.member(user).ban(razon);


          
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
 .setTitle('Nuevo ban del staff')
      .addField(`Usuario baneado`, `**${user}**`)
      .setColor("BLUE")
      .addField(`Staff`, `**${message.author.username}**`)
      .addField("Razón", `**${razon}**`);
  
            	message.channel.send(embed)
    

  
        
                  


  
  }

  
  

if (command === "8ball") { //command Definido
	var rpts = ["Sí", "No", "¿Supongo que si?", "No deberias saber eso", "Confirmo"];

  
   let texto = args.join('')
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Diversión", client.user.avatarURL)
  .setDescription ( "Debes preguntarme algo")
  .addField("Ejemplo : ", "**m!8ball (Pregunta)**")
  .setColor("RANDOM")
  
 if(!texto)  return  message.channel.send(embud);
	
	const embed = new Discord.RichEmbed() //Creamos el embed
		.setTitle('MaiBot ┆ Diversión')
		.setThumbnail("https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3.gif?v=1593643942659")
		.addField('A su pregunta:', args)
		.addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)])
	message.channel.send(embed)
}
  

  
  
  

  
  if(command === 'kick' ){
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**`Permisos insuficientes, Debes tener el permiso KICK_MEMBERS`**")

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(" ")
    
        let texto = args.join('')
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Moderacion", client.user.avatarURL)
  .setDescription ( "Debes poner todo correctamente")
  .addField("Ejemplo : ", "**m!kick (@Mencion) [razón]**")
  .setColor("RANDOM")
  
 if(!user)  return  message.channel.send(embud);

     
        if (user.id === message.author.id) return message.channel.send("**¿Porque harias eso?**");
        if (user.id === client.user.id) return message.channel.send("¡No puedes kickearme!")
                if (!message.guild.member(user).kickable) return message.reply('No puedes kickear a este usuario');

          
        message.guild.member(user).kick(razon);

   
    

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
 .setTitle('Nuevo kick del staff')
      .addField(`Usuario kickeado`, `**${user}**`)
      .setColor("BLUE")
      .addField(`Staff`, `**${message.author.username}**`)
      .addField("Razón", `**${razon}**`);
  
            	message.channel.send(embed)
    

  }
                  

 
  
  
  if(command === 'avatar'){

      let img = message.mentions.users.first()
      if (!img) {

          const embed = new Discord.RichEmbed()
          .setImage(`${message.author.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) {

          message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

      } else {

          const embed = new Discord.RichEmbed()
          .setImage(`${img.avatarURL}`)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
          .setColor()
          .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
          message.channel.send({ embed });

      };

  }
  
 


if(command === "basura"){

let member = message.mentions.users.first()


 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Diversión", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien")
  .addField("Ejemplo : ", "**m!basura (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);






 
let img = await weez.basura(member.displayAvatarURL)





 
message.channel.send({files: [img]})

 } 
  
 




if(command === "trump"){

let member = message.mentions.users.first()
 
let img = await weez.trump(args.join(' '))




 
message.channel.send({files: [img]})


 } 







  if(command === "hug"){
    

 let usuario = message.mentions.members.first()

 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para darle un abrazo")
  .addField("Ejemplo : ", "**m!hug (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);


let x = await neko.sfw.hug().then(url => url.url)
    
 
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> `ha abrazado a` '+usuario+'')
.setImage(x)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor("#e6a000")
message.channel.send(embed)

  }
  




if(command === "slap"){
    
 let usuario = message.mentions.members.first()
   


 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para darle una cachetada")
  .addField("Ejemplo : ", "**m!slap (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);
    
let x = await neko.sfw.slap().then(url => url.url)
    
 
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> ha abofeteado a '+usuario+'')
.setImage(x)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor("#e6a000")
message.channel.send(embed)

  }
  










if(command === "waifu"){




let waifu = ["https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Flatest.jpg?v=1591127711677",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F235248.jpg?v=1591127731839",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F295.png?v=1591127732719",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FwGzkiArdAz.png?v=1591128037411",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fa78cf1a4ab447b6e70c1126365fee922fee87843_hq.gif?v=1591128041920",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F6c328adc0d25a7114b29ea1189974d98.gif?v=1591128047399",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif?v=1591128050695",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_plbt6hv1ij1wuv92g_540.png?v=1591128055526",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F5OhM3nr.gif?v=1591128055526",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F325e4ccacf6463f6f41ee440dd92069aae92e176_hq.gif?v=1591128057445",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F4b60f893-8a8b-472b-a76b-4933cd2ecef2.gif?v=1591128058113",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F137-1371466_monitor-doki-doki-literature-club-monika-doki-doki.png?v=1591128065781",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fe864b94a02262a50abe7bb17de2863a5.gif?v=1591128070572",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F911011.png?v=1591128071717",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F25deaac08ff5b00835b8469da03fb708b38cd03e_hq.gif?v=1591128072367",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F5LYzTBVoS196gvYvw3zjwP36hjCcXtRS48zwJ54nz9g.png?v=1591128078405",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FH0pb.gif?v=1591128078949",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fc0befb38-31d6-44ca-8acd-69574a1bbf35.gif?v=1591128085546",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F6b84be85c125e2513fe2569082b86658.png?v=1591128234308",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F38eb733b7bed73e30b70706e0b268d26.jpg?v=1591128234540",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1747ac174a1b00ecf10f35c39b05d1f1.jpg?v=1591128234629",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F321.png?v=1591128234787",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_pnmmlj15Ma1u1ycqw_540.jpg?v=1591128234898",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FYuno-Gasai-yukikohaibara-37028604-1280-720.jpg?v=1591128235153",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F6b3693977f771d3ad80644eae7114e628b494d84.png?v=1591128235233",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_oss6znNxDe1rcuvl9o9_250.png?v=1591128235501",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F27a3f676-db1d-470c-b33c-1b0cdd67d688.jpg?v=1591128235852",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F0d03af5e7777b8b4546064698325c6b0.jpg?v=1591128236488",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F4t0qrg6u3iiy.jpg?v=1591128236784",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F0cbd6fd32cb74d50065f2ff0756a4cef.jpg?v=1591128237139",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1a57c62a9efda6bcb48c140f3e080ae1.jpg?v=1591128237588",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F3yLCNCyeLaOw6QrKr9KpP4v6tm0.jpg?v=1591128237983",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F8d00e4245dd4d09c1b85b695740c6467.jpg?v=1591128238400",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F8f92ee24e7729c61c4136b34ef76eca8c8929290v2_hq.jpg?v=1591128238604",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F9c2c4649d586fb482f7e196b815808a17b6d1a9bv2_00.jpg?v=1591128239009",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F9e472c96-3759-4a57-9ee8-5eb8e226d259.jpg?v=1591128239178",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ffelt.jpg?v=1591128239607",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F56d4cc79bc3e2bc0505943143ee51cdc1b0fd843_00.jpg?v=1591128240646",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F487dd3de8361a125827b8f89551183b9.jpg?v=1591128241037",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F5a13785f65d8458caf92725699fa11c0WIonJH64esazrLwP-0.png?v=1591128241384",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F51650.jpg?v=1591128241545",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F36db1b5bc0f4e5336df5c092d0151f6a.jpg?v=1591128241604",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F320274.jpg?v=1591128241835",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F337532cd548ea636076c11c0c8f348ca.jpg?v=1591128242336",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F15174703001395782.jpg?v=1591128242391",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fae56cb3a8dd38b9017e6849d0aec612c.jpg?v=1591128242824",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fanime-ore-wo-suki-nano-wa-omae-dake-ka-yo-oresuki-are-you-the-only-one-who-loves-me-sumireko-sanshokuin-hd-wallpaper-preview.jpg?v=1591128243162",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fb875932051f0085b8a97981d53d93a0d.jpg?v=1591128243535",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FBsNpol8.jpg?v=1591128243829",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fc4a04f4062bd2e6d48e0299ee1e67c66.jpg?v=1591128244186",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fc44d2f7b7cc8110d249ee9d65b7b6897.jpg?v=1591128244519",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fc43513d123c373f86136fc29ef96a676ec5e5fb8_hq.jpg?v=1591128244874",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FCTLvv8j.jpg?v=1591128245220",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fd9555f61-9f92-4d42-aba3-442687b83bbd.jpg?v=1591128245654",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fd9121510af3848f6210b5cb0f81baf89.jpg?v=1591128246002",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fdb6e77106a10787b339da6e0b590410c--manga-anime-anime-art.jpg?v=1591128246312",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fe8d13aa011a1af9d542381ce8a48f2ef.jpg?v=1591128247018",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fe54420677a96181377493e29b2e757bf.jpg?v=1591128247457",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Frin_from_shelter_fanart_by_chocoreo_1-dam9o3y.jpg?v=1591128248036",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fflat%2C900x900%2C070%2Cf.u1.jpg?v=1591128248299",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fe867ee2d94e29e9d28e496558cfb2d61.jpg?v=1591128248531",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fimages_1.jpg?v=1591128249034",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FImage_Search_Results-5.jpg?v=1591128249284",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fimages-1.jpg?v=1591128249760",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FIMG_20200221_095522.jpg?v=1591128250237",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FIMG_20200522_145009.jpg?v=1591128250754",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FIMG-20180905-WA0017.jpg?v=1591128251000",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FkC2QBiz.jpg?v=1591128251433",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FNarumi_Momose.jpg?v=1591128251954",
"https://i.imgur.com/hn0YsNQ.gif",

//Ygna                                

"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftenor.gif?v=1591128339464",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1393f50d217dfcf43db328a9f0671dcb.gif?v=1591128338337",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1501704553_sistine_2.gif?v=1591128336006",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fe59d23f25fd43da9188866445a9e9113.gif?v=1591128331613",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F9c143003f0c75f8abc14add8c9033959.gif?v=1591128329442",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_ppt3q0B8vt1u86t2qo1_500.gif?v=1591128325568",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F34494c1894b01d701e2a17afb6f9726f.gif?v=1591128323813",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F95e73efc988e797856d0ba60eaadbc38.gif?v=1591128322878",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fdd7840de466bf8466dbb88532edd887c.gif?v=1591128322464",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fd2bd760cdf6e39bcbe687c44960b070cec80b8f8_hq.gif?v=1591128322464",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F32d50b31f3e3c2e308651290623d3a98.gif?v=1591128320111",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fd509a9613407cf275b918c50bdda2d7f.gif?v=1591128319099",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_olslfkGEtY1tox6hlo1_500.gif?v=1591128286121",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fds.gif?v=1591128283342",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fa70b6e6e21b1236dd11ebd18cf0fcd827d3843f3r1-850-1302v2_hq.png?v=1591128278217",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FCute_Holiday_Kimono_Rinko.png?v=1591128276693",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F999cfd9bee689247d63be3b016daf770afda8e2e_hq.gif?v=1591128275938",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F803901e9412cd3092d43986ef9ced9c2.png?v=1591128275858",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F68747470733a2f2f692e7974696d672e636f6d2f76692f5f684d6f6942395a6169732f6d617872657364656661756c742e6a.png?v=1591128275388",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FRWLYtL8Ok5.png?v=1591128274019",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FScreenshot_2020-03-01-09-02-51-1.png?v=1591128272148",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fyey.png?v=1591128271023",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftumblr_prd74f5tJ81urbbnx_1280.jpg?v=1591128270208",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fmitsuha.png?v=1591128269231",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fa065b4f4113b6d85fb2dd57163defd73.png?v=1591128268685",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Funknown.png?v=1591128268596",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F03ebb863da0046e6d82abe42ea52753f.png?v=1591128267302",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Ftouka_by_thezealotnightmare-d7yoj2r.png?v=1591128266484",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FShigure_Minaduki.png?v=1591128265693",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FMafuyu_Kirisu_Icon_1.png?v=1591128264502",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F78a16b720cb91186d1ed21d81dd2585e4e69a8bc_hq.png?v=1591128263901",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FEIk-zHbXsAA2usN.png?v=1591128263616",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F23574a2e981f4b3425e5d599c038f04d.png?v=1591128263261",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F75997F148CAC430231B193907468D4A493883CA6.png?v=1591128262744",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Funnamed.png?v=1591128262368",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FKanade-kanade-tachibana-fan-club-22446921-495-700.png?v=1591128262283",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fthumb-350-833674.png?v=1591128261336",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Flatest.png?v=1591128259471",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1589201394326.png?v=1591128258992",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fimages.png?v=1591128258513",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fa499a5340670359e925f790d81891ad4f9838718_hq.png?v=1591128258131",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F904874.jpg?v=1591128258078",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fsein1.jpg?v=1591128257262",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F1ec150afbc969fc15c128ad38083ac8e.png?v=1591128256975",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fboku-1.png?v=1591128256871",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F99bde93a8e05d84687f4456b46107836.jpg?v=1591128255406",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FSayuki_Tokihara.jpg?v=1591128254519",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2F9fa6d9a295ce53eee6a7bbd313c3a499.jpg?v=1591128253907",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2FPatchouli_Knowledge.jpg?v=1591128252560",
"https://cdn.glitch.com/7fd5891b-2b82-4d35-b365-af0bd7a08d24%2Fore-wo-suki-nano-wa-omae-dake-ka-yo-episodio-5.jpg?v=1591128252319",
"https://i.imgur.com/f1nRqrU.jpg",
    "https://i.imgur.com/h0uEX7p.jpg",
    "https://i.imgur.com/O0cuT11.jpg",
    "https://i.imgur.com/IHNVzlM.jpg",
    "https://i.imgur.com/eM9fzuf.jpg",
    "https://i.imgur.com/hRm6Oyd.jpg",
    "https://i.imgur.com/FqJShfN.jpg",
    "https://i.imgur.com/fEHqZwI.jpg",
    "https://i.imgur.com/nNMYSQU.jpg",
    "https://i.imgur.com/XITkpT8.jpg",
    "https://i.imgur.com/TZhYybC.jpg",
    "https://i.imgur.com/6NGPxmH.jpg",
    "https://i.imgur.com/OuVcTi5.jpg",
    "https://i.imgur.com/kJ7XuhF.jpg",
    "https://i.imgur.com/yAvtGNH.jpg",
    "https://i.imgur.com/aJ9qZk3.jpg",
    "https://i.imgur.com/ZafZNdQ.png",
    "https://i.imgur.com/wrJGHl9.jpg",
    "https://i.imgur.com/XIL9xys.jpg",
    "https://i.imgur.com/ul8XQRK.jpg",
    "https://i.imgur.com/5qb9z0D.jpg",
    "https://i.imgur.com/3SNfEgP.jpg",
    "https://i.imgur.com/R5bTqC5.jpg",
    "https://i.imgur.com/g8bMdgj.png",
    "https://i.imgur.com/sjhZAAq.jpg",
    "https://i.imgur.com/hNCNK6j.jpg",
    "https://i.imgur.com/TqfEOR4.jpg",
    "https://i.imgur.com/F9xqy8l.jpg",
    "https://i.imgur.com/jdMJY6Q.jpg",
    "https://i.imgur.com/U1hWypu.jpg",
    "https://i.imgur.com/kKkIXn6.jpg",
    "https://i.imgur.com/EWUURot.jpg",
    "https://i.imgur.com/rMaTRUm.jpg",
    "https://i.imgur.com/yWlfUnN.jpg",
    "https://i.imgur.com/PxTAOzF.jpg",
    "https://i.imgur.com/BHwXsf5.jpg",
    "https://i.imgur.com/UKoym9k.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/715128219191214080/957ae2d2bef97aaa58038159c9180805.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/715257744977821827/515d603ba256750ed1aae5a625977695.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/715299973037686934/20200527_222105.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/715406919065534504/images_11.jpeg",
    "http://25.media.tumblr.com/079b784de45d5816a142586b57c99a39/tumblr_mkccvm8Toe1qg304ho1_400.gif",
    "http://31.media.tumblr.com/734da4a860f54bc46395c0ea1910ec24/tumblr_mez2eqHOAb1ru838ko1_500.gif",
    "https://media.giphy.com/media/yy0JSjPZT6dgc/giphy.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/715437222978912266/thumb-1920-1012503.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/715439533545619496/a.png",
    "https://gifimage.net/wp-content/uploads/2017/09/asuka-tanaka-gif-10.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/715634924647874710/671b4031899038eb3c4fe3968632e3be.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/715654154877403397/iris_3.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/715671695817572352/Sakata.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713950025402810478/anne_shelley_19122.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713949210277445683/06-2-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713947350099427428/sophia-ascart-157510.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713946613806006342/portada-otome-game-2.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713926614244917338/f2354bc365e33bf65101dd91e99a2ab0.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713405988891394150/ac3cec88eb4d8b3d4f95615c7f75a702f0847798v2_00.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713405884210085948/thumb-1920-739894.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713405674973036544/a065b4f4113b6d85fb2dd57163defd73.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/713170807664410724/cc491c2c01e03295e2ed5eae608cd4bf.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/713080681491726356/9399d87cc5c5617745a048d0f5b982d4.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712986691035463730/OIP.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/712981467692662824/487dd3de8361a125827b8f89551183b9.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712314778478968973/2ec38cfa-c048-4c6b-af20-6190ea0cba22.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712221870241611836/Aries_con_su_naranja.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712186286840217611/32f15ea67486f6a298a643ebc8603f4b.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712159042839248916/1589859884173.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/712051335293435986/yila6fhy1ti21.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/711945322766532710/20200513_172533.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/711884583435501668/original.webp",
    "https://cdn.discordapp.com/attachments/477271155166674956/711699525319786506/Cr-1mPpXYAAWMU3.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/711698817719861278/4d767b83b4c249d328c3b5ead2f54728.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/711675110381191168/3081f48b-e53f-4b02-a01f-4890358b8de4.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/710940583434387466/1498024725_asd.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/710811280029646948/20200515_081002.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/710646374739214376/trailer-kaguya-sama-love-is-war-arrivano-nuovi-personaggi-data-uscita-v4-418173.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/710367729399627777/23add3e77221e7a5dd4e0d5b28daf68a.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/710199650136752149/e867ee2d94e29e9d28e496558cfb2d61.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/710147491772760104/SAVE_20200513_100915.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/710125094948569158/SAVE_20200513_084242.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/709964561289052170/1589336594880.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/709633442458894356/1589260171739.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/709479918076952616/87c24ef728c6684cbc4741b77e5b3b4d.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/708565299372228609/images.jpeg",
    "https://cdn.discordapp.com/attachments/477271155166674956/707831700776026122/images_16.jpeg",
    "https://cdn.discordapp.com/attachments/477271155166674956/707743731637289040/0a068b62509f9f8edc21ccf25276468b.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/707719796753432586/Shiki.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/707065923236003880/FullArt6Rima.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/706709805472940142/IMG_20200428_163455.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/704522167202611300/Z.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/698671832022253648/Hoshiguma.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/698580509747314728/1e2585a2-356e-40cc-8216-a588cb9af4df.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/702372963927982151/aadf3a8db2c0502291752826cbca35c4.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/698337984893943909/kanna-3---kanna-3.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/698289091644751922/IMG-20180905-WA0017.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/697801368307761272/wGzkiArdAz.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697801226456268810/NanKWM8Dmn.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697801037372850237/n7H6NTwwTX.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697526315531632690/tumblr_o0j6aoNIL11qzljvuo1_640-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697473100190580855/890e34vv98711.jpg",
    "https://i.imgur.com/MHzBUIv.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/697472152370413698/SAVE_20200403_194644.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/704358587341733928/Konachan.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697424497116053574/JEoCb71Opn.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/697451946621141072/RWLYtL8Ok5.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/696590128294002758/b7baac748eee97e664c9723aefa8ccbc.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694380036836425808/1585623494266.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694020302572879892/source.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/692251489489387590/Kijin.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/692250656869711912/Miyako.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/692229647064104970/lLo08Rn.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691799121320869888/Nazrin.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/692148191360974848/2BE0nhMMIE.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/692250016206553129/Inaba.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694054356722647060/EATS5CgUwAAgQSJ.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694418169485590528/1512342984_5c13f62ea17a7c729138488adc31820fb1e640d1_128.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/694419004231647292/53a554c7520412660aa6e7e300bbc7f0a8dcb687_hq.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/694558940687630386/3f421d30cddec576cd8b11f2c065837ddb626620r1-250-273_00.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/695023321170968676/fe1374a3253990d83bf1f87651c9dd65-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694958018093383770/Just_A_Little_Help_T_Kanon.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694956419111452722/Birdcage_Diva_T_Yukina.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694957591981457418/Exciting_Student_Council_President_T_Hina.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/694956673411973150/Cute_Holiday_Kimono_Rinko.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/702660869578031224/c6b1d3b4-8b6f-4ca3-9b64-6c4182ecc8f9.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/704358379845582898/Konachan.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/702661309166125056/e01f4fef-bffb-4f7e-9449-7ef1405b97fb.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/702661432986173440/8ff71017-48df-47b9-9cb4-baef483abd5e.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/703101113695600710/630695.jpghttps://cdn.discordapp.com/attachments/477271155166674956/703101113695600710/630695.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/703717988939071538/thumb-350-833674.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/703480180978745394/white-background-cleavage-emilia-re-zero-re-zero-kara-hajimeru-isekai-seikatsu-wallpaper.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/704382854871777291/original_1.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/691790990629142668/Saigyouji.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691666043541913620/images-1.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/691369072163553390/unknown.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691350312153514074/Shigure_Minaduki.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691350178854076477/Cinnamon.jpeg",
    "https://cdn.discordapp.com/attachments/477271155166674956/691350077553377378/Chocola.gif",
    "https://i.imgur.com/8sP93W8.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/691350052312187020/Vanilla.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/691290944745766982/poster-himouto-umaru-chan-04.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691135731220873216/0GIoZlV.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/690361343722782811/065590bf-2546-4576-9e22-c468357cdde9.gif",
    "https://cdn.discordapp.com/attachments/477271155166674956/690033404041101352/images-1.jpg",
    "https://cdn.discordapp.com/attachments/477271155166674956/689580853126627343/Screenshot_2020-03-17-15-05-38-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/689312323512303746/Screenshot_2020-03-16-21-18-53-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/689308567014211616/fcfa2cd68a5e0861e1a1f701f53399d1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/689307068527673364/r4NmSFI.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/689272101185912897/Screenshot_2020-03-16-18-39-23-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/688809876079771713/Screenshot_2020-03-15-12-02-55-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/689691724506988612/Screenshot_2020-03-17-22-26-52-1.png",
    "https://cdn.discordapp.com/attachments/477271155166674956/691134091000807474/b349af03cafc722f7c9ef2ef31edcdded3213147_hq.gif",
    "https://i.imgur.com/s6DaE8I.jpg",
    "https://i.imgur.com/yCGvZqL.jpg",
    "https://i.imgur.com/UuqDhrA.jpg",
    "https://i.imgur.com/D4xRnsT.jpg",
    "https://i.imgur.com/fVDxaZB.png",
    "https://i.imgur.com/8wyV9sm.png",
    "https://i.imgur.com/dpOmfh9.png",
    "https://i.imgur.com/ZrBnRca.jpg",
    "https://i.imgur.com/yRwVApb.png",
    "https://i.imgur.com/YhKYkUO.jpg",
    "https://i.imgur.com/vLOUavB.png",
    "https://i.imgur.com/xH1Ts6n.png",
    "https://i.imgur.com/sxoVZ2l.png",
    "https://i.imgur.com/5IwvKbl.jpg",
    "https://i.imgur.com/kRivzdY.jpg",
    "https://i.imgur.com/VCT1Bbi.jpg",
]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link





.setTitle('MaiBot ┆ Anime')
.setDescription('**Mira las mejores waifus**')
.setImage(waifu[Math.floor(Math.random() * waifu.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)


  }











 

  
if(command === "tickle"){
    
 let usuario = message.mentions.members.first()
   

 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para hacer cosquillas")
  .addField("Ejemplo : ", "**m!poke (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);

    
let x = await neko.sfw.tickle().then(url => url.url)
    
 
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> ha hecho cosquillas a '+usuario+'')
.setImage(x)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor("#e6a000")
message.channel.send(embed)

  }




if(command === "poke"){
    
 let usuario = message.mentions.members.first()
   
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para molestar")
  .addField("Ejemplo : ", "**m!poke (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);
    
let x = await neko.sfw.poke().then(url => url.url)
    
 
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> ha molestado a '+usuario+'')
.setImage(x)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor("#9b00ff")
message.channel.send(embed)

  }






if(command === "feed"){
    
 let usuario = message.mentions.members.first()



 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para darle de comer")
  .addField("Ejemplo : ", "**m!feed (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);

    
let x = await neko.sfw.feed().then(url => url.url)



    
 
let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> le dio de comer a '+usuario+'')
.setImage(x)
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setColor("#e6a000")
message.channel.send(embed)

  }












if(command === "cachipun"){

 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆ Diversión", client.user.avatarURL)
  .setDescription ( "**Debes elegir  tu opcion**")
  .addField("**Opciones: Pierda, papel o tijeras **","**\nEjemplo: m!cachipun piedra**")
  .setColor("RANDOM")
   if(!texto)  return  message.channel.send(embud);

let opciones = ["piedra", "papel", "tijera"]
if(!opciones.includes(args[0].toLowerCase())) return message.channel.send("¡Opción incorrecta!")

if(args[0] == 'piedra') {
  let random = ["¡Ganaste! Has elejido `piedra` y yo elegí `tijera`.", //win
                "¡Gané!, Has elejido `piedra` y yo elegí `papel`.", //loser
                "Empate. Has elejido `piedra` y yo elegí `piedra`."] //draw
    
  message.reply(` ${random[Math.floor(Math.random() * random.length)]}`)

 }

if(args[0] == 'papel') {
  let random2 = ["¡Gané!. Has elejido `papel` y yo elegí `tijera`", //loser
                 "Empate. Has elejido: `papel` Y yo elegí `papel`.", //draw
                 "¡Ganaste!. Has elejido `papel` y yo elegí `piedra`."] //win
  
  message.reply(` ${random2[Math.floor(Math.random() * random2.length)]}`)

 }

if(args[0] == 'tijera') {
  let random3 = ["Empate. Has elejido: `tijera` y yo elegí `tijera`.", //draw
                 "¡Ganaste!. Has elejido `tijera` y yo elegí `papel`.", //win
                 "¡Gané!. Has elejido `tijera` y yo elegí `piedra`."] //loser
  
  message.reply(` ${random3[Math.floor(Math.random() * random3.length)]}`)
 }

}






















if(command === "te"){


let te = ["https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F1472300768_yo%20tomando%20cafe.gif?v=1590790643989", 
                     "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Funnamed.gif?v=1590790650026",
                       "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F786609e9e210d3ca041b3e8b4cae7a969769e08d_hq.gif?v=1590790651394",
                             "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F3aac28478980a79eda299f7d20ed95792d96f038_hq.gif?v=1590790652717",
                                  "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fdaaced01d71b54b85d55fe951a19a763.gif?v=1590790655476",           
                                          "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Ftenor_1.gif?v=1590804284501",         
                                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fis-the-order-a-rabbit-01.gif?v=1590887867863",  
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftumblr_m9een9jrRI1r9p24qo1_250.gif?v=1595358719944",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fk-on-gif-4.gif?v=1595358721778",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3333333.gif?v=1595358717400",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FDmiN.gif?v=1595358718631",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor.gif?v=1595358721205",                                     
]





let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Anime')
.setDescription('<@'+message.author.id+'> **Esta tomando un té**')
.setImage(te[Math.floor(Math.random() * te.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)

  }
  
  //if (command ==="osu"){
    
   // let username = args[0]
    
    //let texto = args.join(" ");
    //if (!args[0])
    //var uwu = new Discord.RichEmbed()
    //.setAuthor("OsuStats", client.user.avatarURL) //deja reviso bien
    //.setDescription("Muestra las estadisticas del usuario que juega Osu!")
    //.addField("Ejemplo", "m!osu (Nick del jugador que juega Osu)")
    //.setColor("RANDOM")
   // }

  
  //if(!texto)




if(command === "yandere"){


let yandere = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F388.gif?v=1593277337614",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor.gif?v=1593277331664",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgiphy_2.gif?v=1593277331160",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fafaa3e1734e252dc2f73c76f68b3f32b.gif?v=1593277329565",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3c883dbe2849961ef7cae21ca91141e9.gif?v=1593277324288",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgiphy_1.gif?v=1593277322370",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3f804853707d57351bffb61e49bb8d53.gif?v=1593277316339",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fam9ve2aLo_480wa_v1.gif?v=1593277316227",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F73808025-ccb7-479d-803b-c449a0d84276.gif?v=1593277313547",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_2.gif?v=1593277312500",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1dc2f86f95abed5c736454b5a5196d00.gif?v=1593277310681",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FNaiveAmazingGoitered-small.gif?v=1593277307753",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgiphy.gif?v=1593277303271",
                                      
]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Anime')
.setDescription('<@'+message.author.id+'> **Activo su modo yandere**')
.setImage(yandere[Math.floor(Math.random() * yandere.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)


}



if(command === "haha"){




let haha = ["https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fc4f2a0b13086d0c4a3b66845c85f9020.gif?v=1591205208927",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Faea6a568832bca1e0897da2ce0c819af48e035afr1-480-270_001.gif?v=1591205212731",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh11.gif?v=1591205232746",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Ftumblr_liy554UVOH1qit92oo1_500.gif?v=1591205234191",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F62bf42657822aee02f52268a2fba41ed.gif?v=1591205237427",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F0af4650e824b0234a46a42d258fdfc8b.gif?v=1591205240959",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif?v=1591205240959",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh3.gif?v=1591205244162",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2FAries_spring_laugh.gif?v=1591205251135",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh13.gif?v=1591205254218",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F2d31fc3e340e46eaf48bd2790418539b.gif?v=1591205254378",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F70fd4db6e6bf917cd8d641df2ea55f45.gif?v=1591205255006",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fgif_neptune_laugh.gif?v=1591205255584",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Ftumblr_ojj6neLV8B1vj5j9co1_500.gif?v=1591205260823",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh2.gif?v=1591205277333",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F1542693744_e4e7550d5206aa77578bf68aac829580663c4f0a_hq.gif?v=1591205283916",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2FAHWngJ8.gif?v=1592175288268",








//ygna

"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Ftenor6.gif?v=1591205350301",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fp.gif?v=1591205348954",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh.gif?v=1591205329569",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh1.gif?v=1591205317878",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Ftumblr_lk8snmbICc1qb9i9c.gif?v=1591205303932",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh9.gif?v=1591205299277",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Flaugh7.gif?v=1591205296738",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F99f1c7793eb33ba4b9af6478cdc79766.gif?v=1591205293223",



                                     
]





let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link

.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> **Se esta riendo**')
.setImage(haha[Math.floor(Math.random() * haha.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)

  }

  
if(command === "osu"){
  
  
}






if(command === "no"){


let no = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F87717a429aaa68b148ceae4bcb420e818e6e5a020f0df531cc678dc2bad7b04d.gif?v=1590864610995",
                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fa1d7868d43f3bb7849d86971f1b105b2.gif?v=1590864611147",
                             "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F8e3c32d9-282d-4538-85f8-5035838ec189.gif?v=1590864611247",
                                  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Foriginal.gif?v=1590864612246",           
                                          "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1462129449_Haiyore_Nyaruko.gif?v=1590864613129",  
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FjGYMqAy.gif?v=1590864613959",           
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgiphy.gif?v=1595359859822",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fmudkip_splash.gif?v=1595359860274",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FWZvk.gif?v=1595359866067",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F2919bfd556baa4ed0ca22affd9df998d25d3b438_00.gif?v=1595359866107",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F283cd338d17bccabdcffe4022200bce33de9a26f_hq.gif?v=1595359868463",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fe5c.gif?v=1595359869692",                                 
]





let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> **dice que no**')
.setImage(no[Math.floor(Math.random() * no.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)

  }


















  

if(command === "invite"){


let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Ayuda')
.setDescription('**información**')
.addField('¿Quieres unir el bot a tu server?', 'Si quieres invitar al bot a tu server puedes dando [Click aquí](https://discord.com/oauth2/authorize?client_id=708099353675300924&permissions=8&scope=bot)')
.addField('¿Quieres unirte al servidor soporte del bot?', 'Si quieres unirte para saber sobre actualizaciones del bot o sugerencias, puedes dando [Click aquí](https://discord.gg/KFbX3eH)')
.setImage('https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F8SoxQra.gif?v=1593394943111')
.setColor("#f0b1b1")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)

  }













if(command === "sharingan"){






let Sharingan = ["https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fraw.gif?v=1590790269617", 
                     "https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fsasuke-eternal-mangekyou-sharingan-gif-7.gif?v=1590790292476",
                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fd.gif?v=1591294887394",
                                  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fa661935c4126d02290d5be9dfbd61e59.gif?v=1590504478336",
                               "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F8abb45e512793ab89be43062cb55db70.gif?v=1590504803540",
                        "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F52784cd19b12e49c4b7cff942b9692af.gif?v=1590853360635",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2Fphotofunky.gif?v=1591295077132",
"https://cdn.glitch.com/28e50f4a-b25b-4a30-b3dc-35b7ffb4dc0c%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d4a487a42377154336f627372413d3d2d3631373932303434352e313534613962626437393931356361653232313630333335353530322e676966.gif?v=1590892618578",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F960882d6c47696cabc98d53797b1d575.gif?v=1595359220932",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3450996ed44c75049a243abf9eca6c98e348ce36r1-540-304_hq.gif?v=1595359224604",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1512576857_40367-Gif-Naruto-Sasuke-Uchiha-Sharingan-Qavi-.gif?v=1595359228212",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ff19007cd233b85ab1f0cdabf8e6c8e36.gif?v=1595359229057",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor.gif?v=1595359230723",

]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link


   .setTitle("MaiBot ┆ Anime", client.user.avatarURL)
  .setColor("#e42e2e")
  .setDescription('<@'+message.author.id+'> **Activo su Sharingan**')
 .setImage(Sharingan[Math.floor(Math.random() * Sharingan.length)])
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
        message.channel.send({embed});





}













if(command === "cry"){


let Cry = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBJJkFTN0b.gif?v=1590855058794",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSJ08mUXwZ.gif?v=1590855083206",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F8T101PL.gif?v=1590855302133",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1WMmLQvW.gif?v=1590855314482",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_13.gif?v=1590855314832",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBkoBX8mwW.gif?v=1590855326960",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBJf41e51z.gif?v=1590855347668",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkpoLqadG.gif?v=1590855349706",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry4.gif?v=1590855360685",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fd98f9a15cf78d77d319f9277cf092fef.gif?v=1590855365439",
  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1p77LmvW.png?v=1590855483800",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FjX7NDJE.gif?v=1590855485082",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1YmXLmD-.gif?v=1590855485775",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fryi8787vW.gif?v=1590855487035",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry3.gif?v=1590855489564",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FRikka_Cry.gif?v=1590855491190",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1N87IQDZ.gif?v=1590855492720",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJIpry35M.gif?v=1590855494557",
  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F84fc4fed-8156-488a-a2e8-667d27b82f32.gif?v=1590855496132",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Facd43e04-f23b-40cc-b1e4-ab3027fcae74.gif?v=1590855497624",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrknUmIXD-.gif?v=1590855498079",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHy4CS1h5G.gif?v=1590855507241",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1tfQI7wZ.gif?v=1590855507282",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F321.gif?v=1590855508213",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrJUujgJ5Z.gif?v=1590855508968",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FByF7REgdf.gif?v=1590855511829",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSy1EUa-Zz.gif?v=1590855511899",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_15.gif?v=1590855511922",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry_12.gif?v=1590855512680",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJZX78Xw-.gif?v=1590855516525",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry.gif?v=1590855517110",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBJJPXLQPW.gif?v=1590855517615",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry_15.gif?v=1590855521697",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSJHw6yFVf.gif?v=1590855521697",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1Jg1eqJM.gif?v=1590855522367",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fdesconocido.gif?v=1590855522459",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHkbPQUQvW.gif?v=1590855525723",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSk5a01cyf.gif?v=1590855525775",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrJ5IX8XPZ.gif?v=1590855525853",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHyiGQUmPb.gif?v=1590855532940",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1itBRFTZ.gif?v=1590855533821",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrJUbkgqyf.gif?v=1590855536146",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry5.gif?v=1590855540390",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fd1d6c0fe9c91839b97e361387b505b97.gif?v=1590855544815",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcommunity_image_1416150156.gif?v=1590855547670",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ffcc48a0da8096f90dd3e5022b0cc33e6.gif?v=1590855556928",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ff1LnAux.gif?v=1590855559546",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1OCr1hqM.gif?v=1590855562647",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkXImUQDW.gif?v=1590855577018",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fcry_14.gif?v=1590855577574",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1WMmLQvW.gif?v=1590855314482",

]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link


  .setTitle("MaiBot ┆ Reacción", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<@'+message.author.id+'> **Esta llorando**')
 .setImage(Cry[Math.floor(Math.random() * Cry.length)])
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
        message.channel.send({embed});
}








if(command === "like"){



let like = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor-7.gif?v=1590875077477", 
                     "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJuR_JYwW.gif?v=1590875079758",
                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkcyYyKwW.gif?v=1590875081088",
                             "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1522111812_tenor.png?v=1590875086574",
                                  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHkGJt1Fvb.gif?v=1590875086574",
                               "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkljT_yYvb.gif?v=1590875088689",
                        "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1479196646_tumblr_nygr2j0GTq1u86t2qo1_500.gif?v=1590875091563",
                        "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHy9a_yYw-.gif?v=1590875094508",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Frku1FJKPW.gif?v=1590875099051",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F0546513fd9b205c6f19e2275bfba97bd.gif?v=1590875099968",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1YAu1Kv-.gif?v=1590875100078",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1-ytktwZ.gif?v=1590875101068",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_4.gif?v=1590875106555",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHyvstTN0W.gif?v=1590875109343",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fdd80ddced20bc30e874cba583681a932.gif?v=1590875114121",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F345f0b1c-daa3-4f37-a9c8-77e2d64c140f.gif?v=1590875115510",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F38200478b91db2d19a12ecf4672391c9.gif?v=1590875115884",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FEasyAdorableArrowcrab-size_restricted.gif?v=1590875116001",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FMakise.Kurisu.full.2519913.gif?v=1590875125829",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1PadJtPZ.gif?v=1590875132246",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHy11t1KDZ.gif?v=1590875134680",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1475035763_Cute_Anime_Gif.gif?v=1590875137829",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_5.gif?v=1590875138333",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1D1KkKD-.gif?v=1590875139288",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F7374e0d6ebc8c05b22857a530c6e6b61.gif?v=1590875143732",
]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link


   .setTitle("MaiBot ┆ Reacción", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<@'+message.author.id+'> **Aprueba esto**')
 .setImage(like[Math.floor(Math.random() * like.length)])
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
        message.channel.send({embed});
}







if(command === "happy"){


let happy = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSJPd4JYPZ.gif?v=1590949760812", 
                     "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fa5b34e01b953b80d7877fa508263bde8.gif?v=1590949768835",
                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fa29a0ef1-0bae-4b4c-8905-74fb757a9ce1.gif?v=1590949840767",
                             "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F90a4e174-527e-445f-be80-3cf49010b0bb.gif?v=1590949879885",
                                  "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F2d3c07e5-e228-42e2-b096-19d0ec0bf91d.gif?v=1590949883184",           
                                          "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSkR3TJFNM.gif?v=1590949905025",         
                                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBk8P4yKwW.gif?v=1590949905918",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor_7.gif?v=1590949930094",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBkVH4kKPb.gif?v=1590949932532",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ff6f4d634251b7803c271d6e2bd2450930ca6294f_hq.gif?v=1590949983005",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F232320412069202.gif?v=1590949986132",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor0.gif?v=1590949986970",
          "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fff5ad9736f56c4b9599c4d4f89ea0080.gif?v=1590949987138",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgif_happy_plutia.gif?v=1590949991112",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftenor.gif?v=1590949991196",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkTDVJYwW.gif?v=1590949998171",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fhappy_ngnl_15.gif?v=1590949999524",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1PU4kYDW.gif?v=1590950003069",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Ftumblr_ntepjt6u9i1ta7pubo2_500.gif?v=1590950005991",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkB4NJtD-.gif?v=1590950009380",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fec94873e5e1d4fd74cad556792240f33d857738e_hq.gif?v=1590950010056",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fhappy_ngnl_12.gif?v=1590950012602",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJ0DEytPZ.gif?v=1590950017180",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fry4U4JFwW.gif?v=1590950018292",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHytD41KPZ.gif?v=1590950021197",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Funnamed_1.gif?v=1590950027955",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkTdVJFw-.gif?v=1590950028668",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1-UN1KPb.gif?v=1590950033224",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHkUrEytDZ.gif?v=1590950034933",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1prEJFPZ.gif?v=1590950035818",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F90faaa5798b8d9e2514c56c75032704b1697a1ec_hq.gif?v=1590950035936",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F2d53e04c-a47a-45dd-9549-f49dff739ca6.gif?v=1590950047788",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHyxHN1Kv-.gif?v=1590950050231",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FqZdr40B.gif?v=1590950050999",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F30ab5ace-aa2c-44d3-825e-cacc060e5057.gif?v=1590950055096",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrJZYEytPb.gif?v=1590950056288",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F9d4499061565e2bd2e007914c612c334.gif?v=1590950058467",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHypVV1Kwb.gif?v=1590950059221",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F98b8b6067c437d4ad2cb0ee1e604601c.gif?v=1590950060677",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSJq9EJKwZ.gif?v=1590950064131",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBytqEyKPZ.gif?v=1590950065265",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrJOwNyFPb.gif?v=1590950071724",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJz44ytDW.gif?v=1590950076164",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1IdE1KD-.gif?v=1590950076380",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSJBYN1YwZ.gif?v=1590950086173",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FeY824MK.gif?v=1590950095178",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkxvEJYv-.gif?v=1590950096894",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F6ad602f1149a9261202d395f91b48b0d5c384334_hq.gif?v=1590950097778",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkH84ytPZ.gif?v=1590950102891",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FrkqL4ktDZ.gif?v=1590950107597",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fa389a577-595c-4ed1-8b87-d47703ceaafc.gif?v=1590950110058",
]





let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Reacción')
.setDescription('<@'+message.author.id+'> **Esta feliz **')
.setImage(happy[Math.floor(Math.random() * happy.length)])
.setColor("#e6a000")
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
message.channel.send(embed)

  }













if(command === "dance"){






let dance = ["https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F503b631c5ea90a36ade96f3ed5bbec135f30a778_hq.gif?v=1590887969039", 
                     "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSyeIdOLXPb.gif?v=1590887969362",
                       "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FCute.gif?v=1590887969861",
                             "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBkl1YLXP-.gif?v=1590887970497",
                               "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1LUuImvZ.gif?v=1590887972068",
                        "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FByOruIQPb.gif?v=1590887972306",
                        "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSygJpdImPb.gif?v=1590887972600",
                 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1Wli_Umwb.gif?v=1590887976487",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHylouUmPb.gif?v=1590887977651",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fc3c6a1479f0c3cbe8f30b38401598abc.gif?v=1590887980319",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FSmug_dancing.gif?v=1590887982041",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F3ca99c3e-f962-4e56-963a-2c21f6b1bf94.gif?v=1590887982479",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FPastelAmpleBelugawhale-size_restricted.gif?v=1590887989112",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FryvHO8Qwb.gif?v=1590887990729",
 "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fchikadance1.gif?v=1590888001559",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FS1bgKI7vW.gif?v=1590888001991",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F07f.gif?v=1590888010053",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F28188fc7988db449f15b70b06d7dae7101b56f3f_00.gif?v=1590888010550",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fgiphy_4.gif?v=1590888012468",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Funnamed_5.gif?v=1590888015997",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fabe479b6-e8b9-4c55-87a9-40f822c5525a.gif?v=1590888017366",
             "https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FBJYVd8QPb.gif?v=1590958342170",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fr1Nmu8mw-.gif?v=1590958347101",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FS1HvWlF4M.gif?v=1590958347536",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fchikadance3.gif?v=1590958715324",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHJ2vuLQPZ.gif?v=1590958880152",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FB1fFSk39M.gif?v=1591030666386",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH14xFU7PZ.gif?v=1591030665974",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fchikadance4.gif?v=1591030660256",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F1496202090_tumblr_mzv51xZLvs1qcsnnso1_500.gif?v=1591030658498",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FH1yFOUmv-.gif?v=1591030656655",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fee434bad-a40c-44a5-a1ee-e10a46ec0c81.gif?v=1591030656435",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2Fchikadance5.gif?v=1591030653354",
"https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2FHkKhdI7PW.gif?v=1591030649621",
]

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link


   .setTitle("MaiBot ┆ Reacción", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<@'+message.author.id+'> **Esta bailando**')
 .setImage(dance[Math.floor(Math.random() * dance.length)])
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
        message.channel.send({embed});
}










if(command === "kiss"){

         let user = message.mentions.users.first(); 
  let kiss = await neko.sfw.kiss()  
  
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("MaiBot ┆  Reacción", client.user.avatarURL)
  .setDescription ( "Debes mencionar a alguien para besarlo")
  .addField("Ejemplo : ", "**m!kiss (@Mencion)**")
  .setColor("RANDOM")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setTitle("MaiBot | Reacción", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' besó a '+ user.username +'**')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setImage(kiss.url)
        message.channel.send({embed});
  
}










if(command === "help"){



let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot')
.addField('Función' , 'Soy un Bot que esta en desarrollo por <@329728108485672960>, Si quieres sugerir algo puedes hablarle a mi creador o únete a mi servidor soporte.')
.addField('Prefix', 'Mi prefix actual es **m!**, pero dentro de poco ya tendré para cambiarlo a gusto de cada uno, usa **m!comandos** para ver mis otros comandos.')
.addField('¿Como invitarme?', 'Para invitarme o unirte a mi servidor solo debes usar **m!invite**.')
.setColor('#2f3136')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual
.setThumbnail(client.user.displayAvatarURL)
message.channel.send(embed)

}











   
















//Desde aquí son los errores sasasasasasaasa













if(command === "infobot"){
message.channel.startTyping();//Esto hace que el bot comienze a escribir

setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
  message.channel.send('Funa a BaztyMilos :(');//enviamos el mensaje
  message.channel.stopTyping()//Hacemos que el bot deje de escribir
}, 3000);//cerramos el setTimeout


let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Error')
.setDescription('**`Creo que querias poner m!botinfo`**')
.setImage('https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F70ce41310f8a9c2a84e97b57198015d9.gif?v=1590435540846')
.setColor('#2f3136')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual

message.channel.send(embed)

}





if(command === "invites"){

let embed = new Discord.RichEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
.setTitle('MaiBot ┆ Error')
.setDescription('**`Creo que querias poner m!invite`**')
.setImage('https://cdn.glitch.com/684e5afc-b4b6-48f9-8c1f-7faac761001c%2F70ce41310f8a9c2a84e97b57198015d9.gif?v=1590435540846')
.setColor('#2f3136')
.setFooter('MaiBot', client.user.displayAvatarURL)
.setAuthor('', message.author.displayAvatarURL)
.setTimestamp() //Coloca una fecha al lado del footer, Default es la fecha actual

message.channel.send(embed)

}




  
  

  }); //acá cierras el evento


client.login("NzA4MDk5MzUzNjc1MzAwOTI0.XvI-NQ.7k92dfJjftZNxw3EwNRMZtswSS0")