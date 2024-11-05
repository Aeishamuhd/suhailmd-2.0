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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_23_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoQTBoMHpVekc3MitlaThXaHc0eXBSS0J6ZWdLWEN3SzZVdjhnUkQwY1hBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXdHhld2NGaFJNMlRqbVJURC15SkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2YmUzMzJiLWEzYjgtNDBkMC05ZjVkLTE5NzY0YjIzMGUzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDI1NSxcbiAgICAgIDEwNCxcbiAgICAgIDEwMSxcbiAgICAgIDc3LFxuICAgICAgMTc1LFxuICAgICAgNzksXG4gICAgICAxNSxcbiAgICAgIDcxLFxuICAgICAgMjM5LFxuICAgICAgMjU1LFxuICAgICAgMTU2LFxuICAgICAgOTEsXG4gICAgICAyNDEsXG4gICAgICAxMixcbiAgICAgIDI3LFxuICAgICAgNDgsXG4gICAgICAxNzgsXG4gICAgICAxNjUsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgODgsXG4gICAgICAyMTUsXG4gICAgICA1OCxcbiAgICAgIDIsXG4gICAgICAxNzYsXG4gICAgICAxNDgsXG4gICAgICAxNTcsXG4gICAgICAxNSxcbiAgICAgIDE1MixcbiAgICAgIDE5MSxcbiAgICAgIDExMSxcbiAgICAgIDEwOSxcbiAgICAgIDkyLFxuICAgICAgMjUwLFxuICAgICAgMjQ2LFxuICAgICAgMTc0LFxuICAgICAgMjIxLFxuICAgICAgNjcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNWUo1MlBXRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MzUzODU5Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ4MTk5MDExNTM1MDY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK2FoTTBIRU9qSHA3a0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd5a3BhdXp3QWhWOW1TRkdJNHo2ODEya1V5ekFFL3FmbzkzNlp2dmRwREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3crRTlGRVI0TU5JQ29FaE90dWowdGo1SjZsVDQxQjlVUnRxYmYwd09PcXB6UExjeDU0SG1JQmxsc09YZE1xUGZvL05qZTM2aGYrUjR1VFFUWEtHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnJMaFFBZFprOGxCbDZ0QlBZTU5YNzI1dU1GY29xdi9PcmYzd0pKK1VaeVlxMUk4N0ZQeHdBck9pMEN1elo2QlkvRHVMRjBIaDJ5aWIyU0ZqNFZqQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzUzODU5Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc5ODU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd2MVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3YxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQURsZ1pHZy81Vlg2ajhvVFJHZ1VpbGp4eTBKRklWcnNxbkpnRHE4ZEc3TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQwNTk3ODg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2NTgzMTgyOTdcIn0iCn0="  // PUT your SESSION_ID 


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
