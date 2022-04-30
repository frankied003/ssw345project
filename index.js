import { Client, Intents, MessageAttachment, MessageEmbed } from "discord.js";
import { getWeatherForZIP } from "./weather-api/api.js";
import dotenv from "dotenv";
import { checkWeather } from "./weather-api/recommend.js";
dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content.startsWith("getWeather")) {
    const messageContentArray = msg.content.split(" ");
    if (messageContentArray[1].length != 5) {
      return msg.reply("That is not a valid zip code!");
    }
    msg.reply("Getting weather, one moment please...");
    const data = await getWeatherForZIP(messageContentArray[1]);
    const stringifiedData = JSON.stringify(data.current, null, 2);
    msg.reply("```json\n" + stringifiedData + "\n```");
  }
});

client.on("message", async (msg) => {
  if (msg.content.startsWith("whatToWear")) {
    const messageContentArray = msg.content.split(" ");
    if (messageContentArray[1].length != 5) {
      return msg.reply("That is not a valid zip code!");
    }
    msg.reply("Getting your clothing recommendations...");

    const data = await getWeatherForZIP(messageContentArray[1]);

    await checkWeather(data, msg);
  }
});

client.login(process.env.TOKEN);
