const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mr Chand",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Tujhe Yaad Kar Loon Toh Mil Jata Hai Sukoon,\nMere Ghamon Ka ilaaj Bhi Kitna Sasta Hai.🖤😇✍️", "Badi Gustakh Hai Tumhari Yaad Ise Tameez Sikha Do,😏\nDastak Bhi Nahi Deti Aur Dil Mein Utar Jati Hai.🫢✍️", "Teri Yaadon Ko Pasand Hai Meri Aankhon Ki Nami,🥹\nHasna Bhi Chahu Toh Rula Deti Hai Teri Kami.🙃🖤", "Har Ek Pehlu Tera Mere Dil Me Abaad Ho Jaye,❤️\nTujhe Main Iss Kadar Dekhu Mujhe Tu Yaad Ho Jaye.😇🙃✍️", "Kaise badal loon ye aadat main apni,🤔\nKi mujhe tujhe yaad karne ki aadat ho gai hai.🫢", "Itna na yaad😇aao ki khud ko Tum🧕samajh baithe,\nMujhe ehsas😌rahne do Meri apni bhi kahani🤗hai,", "Sarahade 🚧 tod kar aa jati hai kisi Pankshi🐦ki tarah,\nYe teri yaad😒hai jo bant'ti nhi kisi mulkon🇮🇳ki tarah,", "Teri🧕hi yaad me gujar jati hai,\nJise log rat 🌒 kahate hai,", "Uski🤔yad aai hai sans jara🙋‍♂️ahista chalo,\nDhadkano💓se bhi ibadat me khalal😏padta hai,", "Tut jayegi🧕teri zid ki aadat us⏰waqt, Jab milegi khabar📢tujhko ki Yaad karne😎wala... Ab yaad ban ban🤷🏻‍♂️gaya hai,", "Besabr ankho👀ki tadap aur bhi🤗badh jati hai,\nJab dil❤tumahre didar🧐ki jid karta hai,", "Utni bar to sans🗣️bhi nhi lete hum,\nEk din me jitne bar tumhen🤗yaad karte hai,", "Fir tumhari🧕yaad fir tumhari aash Fir tumhari🗣️baten,\nAye dil❤lagta hai tadapne ka Bahut shauk hai🤗tumhen, ", "Kabhi yaad🤔ati hai kabhi tumhare khawab😴ate hai,\nMujhe😎satane ke salike to🧕tumhe Behisab ate hai,😏"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  
  if (event.body.indexOf("Bot ko nikal do") == 0 || (event.body.indexOf("miss you") == 0 || (event.body.indexOf("Pagal") == 0 || (event.body.indexOf("Miss You") == 0 || (event.body.indexOf("MISS YOU") == 0 || (event.body.indexOf("Bot I Miss You") == 0 || (event.body.indexOf("BOT I MISS YOU") == 0 || (event.body.indexOf("i miss you") == 0 || (event.body.indexOf("I miss you bot") == 0 || (event.body.indexOf("mich you") == 0 || (event.body.indexOf("Bot miss you") == 0 || (event.body.indexOf("I miss you bot") == 0 || (event.body.indexOf("mich u bot") == 0 || (event.body.indexOf("Miss you") == 0 || (event.body.indexOf("Bot miss you") == 0 || (event.body.indexOf("I miss you") == 0 || (event.body.indexOf("Miss u bot") == 0 || (event.body.indexOf("I Miss U Bot") == 0 || (event.body.indexOf("I Miss You") == 0 || (event.body.indexOf("miss You") == 0 || (event.body.indexOf("Bot miss u") == 0 || (event.body.indexOf("i miss bot") == 0 ||(event.body.indexOf("I misss u")) == 0 ))) {
    var msg = {
      body: `🧡★━━━━━✩━━━━━★💥\n𝐍𝐚𝐦𝐞 🐣:-\n ${name} \n≪━─━─━─◈─━─━─━≫ 𝐓𝐞𝐱𝐭 💬 :-\n ${rand}\n💥★━━━━━✩━━━━━★🧡`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}
