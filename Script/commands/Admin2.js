const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");
module.exports.config = {
 name: "admin2",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin2",
 cooldowns: 5
};
module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Kolkata").format("DD/MM/YYYY hh:mm:ss A");
 const callback = () => api.sendMessage({
   body: `
══════════════════════
 🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟
══════════════════════
👤 𝐍𝐚𝐦𝐞 : 𝐀𝐟𝐢𝐲𝐚
🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝐅𝐞𝐦𝐚𝐥𝐞
❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐌𝐢𝐧𝐠𝐥𝐞
🎂 𝐀𝐠𝐞 : 𝟏𝟖+
🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝐈𝐬𝐥𝐚𝐦
🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐁𝐨𝐥𝐛𝐨𝐧𝐚😒
🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : (𝐖𝐁)𝐇𝐨𝐰𝐫𝐚𝐡
══════════════════════
📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://facebook.com/100042200207408
💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: 𝐓𝐨𝐤𝐞 𝐃𝐞𝐛𝐨 𝐊𝐞𝐧𝐨 🤷‍♂️
══════════════════════
🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}
══════════════════════
 `,
   attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
 }, event.threadID, () => {
   if (fs.existsSync(__dirname + "/cache/1.jpg")) fs.unlinkSync(__dirname + "/cache/1.jpg");
 });
 return request("https://graph.facebook.com/100042200207408/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662")
 .pipe(fs.createWriteStream(__dirname + '/cache/1.jpg'))
 .on('close', () => callback());
};
