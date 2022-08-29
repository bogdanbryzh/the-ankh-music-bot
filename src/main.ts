import TelegramBot from "node-telegram-bot-api";
import { channelId, token } from "./config";

if (!token) throw new Error("No token provided");

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on("audio", (msg) => {
  console.log(msg);

  if (msg.from!.id !== 835930952) {
    bot.sendMessage(msg.chat.id, "You not authorized to use this bot");
  } else {
    bot.sendAudio(channelId, msg.audio!.file_id, {
      caption: "[Music](https://t.me/the_ankh_music)",
      parse_mode: "Markdown",
    });
  }
});

