//insta imaasif_7
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BY AASIF ALAM
const fs = require("fs");
module.exports.config = {
	name: "KISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AASIF ALAM", ////////insta imaasif_7
	description: "THIS BOT IS AASIF ALAM",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KISS") ||
     react.includes("kiss") || react.includes("चूमा") || react.includes("Kiss") ||
react.includes("kiss me") ||
react.includes("KISS YOU")) {
		var msg = {
				body: `𝑰 𝑲𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑩𝑨𝑩𝒀 💋🙊💞`,attachment: fs.createReadStream(__dirname + `/noprefix/kissyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
