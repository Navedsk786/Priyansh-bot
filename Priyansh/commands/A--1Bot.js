const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Prem Bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RAVI KUMAR",
  description: "prem bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️", threadID);
   };

    if ((event.body.toLowerCase() == "sry") || (event.body.toLowerCase() == "Sry") || (event.body.toLowerCase() == "SRY") ||(event.body.toLowerCase() == "SrY") || (event.body.toLowerCase() == "sorry") ||(event.body.toLowerCase() == "Sorry") || (event.body.toLowerCase() == "SORRY") || (event.body.toLowerCase() == "SoRrY")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐒𝐎𝐑𝐑𝐘 𝐐 𝐁𝐎𝐋 𝐑𝐀𝐇𝐄 𝐇𝐎  🥺🥺🥺🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "Coll aao") || (event.body.toLowerCase() == "coll aao") || (event.body.toLowerCase() == "COLL AAO") || (event.body.toLowerCase() == "Coll")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  ☞︎[ अरे बाबू में केसे कॉल आऊ में तो बोट हु जानू मेरे मालिक आ जायेंगे लिखो ☞︎ [ Boss ] ☜︎  💖💖💖💥] ☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  ☞︎[ ᏗᏝᏋ ᎷᏋᏒᎥ ᏰᏗᏰᏬ ᏕᏗᏒᎷᏗ ᎶᏗᎽᎥ 🍒🍒.. 🙈🙈 ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") ||(event.body.toLowerCase() == "😂😂😂") ||(event.body.toLowerCase() == "😂😂😂😂") ||(event.body.toLowerCase() == "😀") ||(event.body.toLowerCase() == "😀😀") ||(event.body.toLowerCase() == "😀😀😀") ||(event.body.toLowerCase() == "😀😀😀😀") ||(event.body.toLowerCase() == "😃") ||(event.body.toLowerCase() == "😃😃") ||(event.body.toLowerCase() == "😃😃😃") ||(event.body.toLowerCase() == "😃😃😃😃") || (event.body.toLowerCase() == "😄") ||(event.body.toLowerCase() == "😄😄") ||(event.body.toLowerCase() == "😄😄😄") ||(event.body.toLowerCase() == "😄😄😄😄") ||(event.body.toLowerCase() == "😆") ||(event.body.toLowerCase() == "😆😆") ||(event.body.toLowerCase() == "😆😆😆") ||(event.body.toLowerCase() == "😆😆😆😆") ||(event.body.toLowerCase() == "😁") ||(event.body.toLowerCase() == "😁😁") ||(event.body.toLowerCase() == "😁😁😁") ||(event.body.toLowerCase() == "😁😁😁😁") || (event.body.toLowerCase() == "😅") ||(event.body.toLowerCase() == "😅😅") ||(event.body.toLowerCase() == "😅😅😅") ||(event.body.toLowerCase() == "😅😅😅😅") ||(event.body.toLowerCase() == "🤣") ||(event.body.toLowerCase() == "🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣🤣") ||(event.body.toLowerCase() == "😹") ||(event.body.toLowerCase() == "😹😹") ||(event.body.toLowerCase() == "😹😹😹") ||(event.body.toLowerCase() == "😹😹😹😹") ||(event.body.toLowerCase() == "😸") ||(event.body.toLowerCase() == "😸😸") ||(event.body.toLowerCase() == "😸😸😸") ||(event.body.toLowerCase() == "😸😸😸😸")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━★✼☆｡🥀✨💦💙 ☞︎ 𝐉𝐚𝐝𝐚 𝐦𝐚𝐭 𝐡𝐚𝐬𝐨 𝐧𝐚𝐡𝐢 𝐭𝐨 𝐦𝐚𝐤𝐡𝐢𝐢 𝐆𝐡𝐮𝐬𝐡 𝐣𝐚𝐲𝐞𝐠𝐢 𝐦𝐮𝐡 𝐦𝐚𝐢𝐧 ज😁😁😁.. ☜︎🥀✨💦💙｡☆✼★━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🤦🏻‍♀️") || (event.body.toLowerCase() == "🤦🏻‍♀️🤦🏻‍♀️") || (event.body.toLowerCase() == "🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️") ||(event.body.toLowerCase() == "🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️") || (event.body.toLowerCase() == "🤦") ||(event.body.toLowerCase() == "🤦🤦") || (event.body.toLowerCase() == "🤦🤦🤦") || (event.body.toLowerCase() == "🤦🤦🤦🤦")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝚔𝚒𝚞 𝚜𝚒𝚛 𝚔𝚘 𝚙𝚒𝚝 𝚛𝚊𝚑𝚎 𝚑𝚘 𝚓𝚊𝚍𝚊 𝚜𝚊𝚛 𝚍𝚊𝚛𝚍 𝚑𝚘 𝚛𝚊𝚑𝚊 𝚑𝚊𝚒 𝚋𝚊𝚋𝚞🥺🥺🥺..….🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫🤫")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐓𝐡𝐚𝐫𝐤𝐢 𝐢𝐧𝐬𝐡𝐚𝐧 𝐦𝐚𝐢𝐧 𝐤𝐢𝐮 𝐜𝐡𝐮𝐩 𝐡𝐮 𝐭𝐮 𝐜𝐡𝐮𝐩 𝐡𝐨 𝐣𝐚𝐚𝐚 🙃🙃🙃👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "👊") || (event.body.toLowerCase() == "👊👊") || (event.body.toLowerCase() == "👊👊👊") || (event.body.toLowerCase() == "👊👊👊👊")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  ☞︎[ 𝐁𝐀𝐁𝐘 𝐁𝐎𝐓 𝐊𝐎 𝐊𝐈𝐔 𝐌𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎🍒🍒... 🤭🙈🙈 ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔") || (event.body.toLowerCase() == "😔😔😔") || (event.body.toLowerCase() == "😔😔😔😔")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐁𝐚𝐛𝐮 𝐬𝐚𝐝 𝐤𝐢𝐮 𝐡𝐨 𝐤𝐢𝐬𝐢 𝐧𝐞 𝐤𝐮𝐜𝐡 𝐛𝐨𝐥 𝐝𝐢𝐲𝐚 𝐛𝐚𝐛𝐮 🥺🥺🥺🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐁𝐚𝐛𝐮 𝐚𝐩𝐤𝐞 𝐬𝐚𝐫 𝐤𝐨 𝐤𝐢𝐚 𝐡𝐮𝐚 🙄🙄🙄🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐬𝐨𝐧𝐞 𝐣𝐚𝐚 𝐫𝐚𝐡𝐚 𝐡𝐚𝐢 𝐛𝐚𝐛𝐮 😴😴🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱🥱")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 सोने जा रहा है बाबू 🥱🥱🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "Bot tharki") || (event.body.toLowerCase() == "bot pagal") || (event.body.toLowerCase() == "Tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  𝐀𝐁𝐄 𝐒𝐀𝐋𝐄 𝐓𝐔 𝐓𝐇𝐀𝐑𝐊𝐈 𝐓𝐄𝐑𝐀 𝐁𝐀𝐀𝐏 𝐓𝐇𝐀𝐑𝐊𝐈 𝐀𝐘𝐀 𝐁𝐀𝐃𝐀 𝐌𝐄𝐊𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 𝐁𝐎𝐋𝐍𝐄 𝐖𝐀𝐋𝐀 🙈🙈🙈🙈👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🍫") || (event.body.toLowerCase() == "🍫🍫") || (event.body.toLowerCase() == "🍫🍫🍫") || (event.body.toLowerCase() == "🍫🍫🍫🍫")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  ☞︎[ 𝐁𝐇𝐔𝐓 𝐌𝐀𝐒𝐓  चॉकलेट🍫 𝐇𝐀𝐈 𝐁𝐀𝐁𝐔 ... 🤭🙈🙈 ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("Jaan") == 0 || (event.body.indexOf("Babu") == 0)) {
    var msg = {
      body: `🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙🍁🌼🌹 ${name} 🌹🌼🍁🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙\n\n 👉${rand} \n\n                       🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙◦•●◉✿ 𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍 ✿◉●•◦🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙`
    }
    return api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
