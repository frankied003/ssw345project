import { MessageAttachment, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export const checkWeather = async (data, msg) => {
  if (data.temp.max < 40) {
    const file = new MessageAttachment("./img/jacket.png");
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's cold. You should wear a jacket today.")
      .setImage("attachment://jacket.png");

    msg.channel.send({ embeds: [exampleEmbed], files: [file] });
  }

  if (data.temp.max >= 40 && data.temp.max < 60) {
    const file = new MessageAttachment("./img/hoodie.png");
    const exampleEmbed = new MessageEmbed()
      .setTitle(
        "Not too cold. Not too warm. You should wear a light jacket or sweater."
      )
      .setImage("attachment://hoodie.png");

    msg.channel.send({ embeds: [exampleEmbed], files: [file] });
  }

  if (data.temp.max >= 60) {
    const file = new MessageAttachment("./img/shorts.png");
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's warm out. You should wear a nice pair of shorts!")
      .setImage("attachment://shorts.png");

    msg.channel.send({ embeds: [exampleEmbed], files: [file] });
  }

  if (data.snow) {
  }

  if (data.rain) {
  }
};
