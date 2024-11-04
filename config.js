const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163538593";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_50_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhVd1RxY0tsajhYbTlXVHp5U013cDFiMG5tUHB3TnVsWFppYzdyNVpzV1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVVa0tvdU01UVRPZmthcGppYnluMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZkNDQ1ODQtN2Y2YS00NDgyLWJlMjItYWIzOGUxZjYxZWNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMjI2LFxuICAgICAgMTI3LFxuICAgICAgMTMzLFxuICAgICAgMTgzLFxuICAgICAgMTAzLFxuICAgICAgMjAsXG4gICAgICAxMTMsXG4gICAgICAxMjYsXG4gICAgICAxNixcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICAyMSxcbiAgICAgIDEyNixcbiAgICAgIDIwNCxcbiAgICAgIDI1MCxcbiAgICAgIDEyNSxcbiAgICAgIDkxLFxuICAgICAgMjIwLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxODUsXG4gICAgICAxMjMsXG4gICAgICAxMDQsXG4gICAgICAxODEsXG4gICAgICAxOTUsXG4gICAgICAxNjAsXG4gICAgICA2MCxcbiAgICAgIDIwMSxcbiAgICAgIDM1LFxuICAgICAgMzUsXG4gICAgICAxMzYsXG4gICAgICA0NyxcbiAgICAgIDE1NCxcbiAgICAgIDE4MyxcbiAgICAgIDE0LFxuICAgICAgMjExLFxuICAgICAgODUsXG4gICAgICAyNyxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhBMVk5VjlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNTM4NTkzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDgxOTkwMTE1MzUwNjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ArYWhNMEhFTTZ1cExrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3lrcGF1endBaFY5bVNGR0k0ejY4MTJrVXl6QUUvcWZvOTM2WnZ2ZHBEQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1TFduaEpORnZ5WjdaK2VnZ3hPSG4wck9YTndUNWJaN0FQK0ZINVFlZ0VDYUdFU0FsbkRabTNLdGdXZWVRbXZIK203cXdITXMzQzdlY3lnbW14TjBBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2Njkrd0dETTRvZkZGdzRYeXE2RWViVEFDSzh2eDZ3WVpKenhhTTh5Q000MEV0S2xHVEF1VGlOUHVvV2xVQjhOQzNJL0hZbUlSMlNvT3g0cmFKVU9CZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYzNTM4NTkzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzQ2MTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3YxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBRGxnWkdnLzVWWDZqOG9UUkdnVWlsanh5MEpGSVZyc3FuSmdEcThkRzdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDA1OTc4ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDY1ODMxODI5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
