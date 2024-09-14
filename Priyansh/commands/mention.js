module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100034049240014") {
    var aid = ["100034049240014"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝐖𝐨 𝐁𝐮𝐬𝐲 𝐇𝐚𝐢 𝐌𝐮𝐣𝐡𝐞 𝐁𝐨𝐥𝐨 𝐊𝐲𝐚 𝐁𝐨𝐥𝐧𝐚 𝐇𝐚𝐢 ?", "𝐊𝐢𝐲𝐚 𝐇𝐮𝐚 𝐁𝐨𝐬𝐬 𝐊𝐨 𝐐 𝐁𝐮𝐥𝐚 𝐑𝐚𝐡𝐞 𝐇𝐨 ?", "𝐰𝐨 𝐬𝐡𝐚𝐲𝐚𝐝 𝐛𝐮𝐬𝐲 𝐡𝐨𝐠𝐚 ", "𝐒𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 𝐭𝐨 𝐜𝐡𝐚𝐥𝐚 𝐠𝐚𝐲𝐚 𝐤𝐨𝐢 𝐤𝐚𝐚𝐦 𝐡𝐚𝐢 𝐭𝐨 𝐦𝐞𝐤𝐨 𝐛𝐨𝐥 𝐝𝐨 𝐛𝐚𝐛𝐮"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
