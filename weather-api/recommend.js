import { MessageAttachment, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export const checkWeather = async (data, msg) => {
  if (data.temp.max < 40) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's cold. You should wear a jacket today.")
      .setDescription(`🧥 Jacket\n👖 Pants\n🧣 Scarf\n🧤 Gloves\n👟 Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.temp.max >= 40 && data.temp.max < 60) {
    const exampleEmbed = new MessageEmbed()
      .setTitle(
        "Not too cold. Not too warm. Here's what you should wear today:"
      )
      .setDescription(`🧥 Light Jacket\n👖 Pants\n👟 Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.temp.max >= 60) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's warm out. Here's what you should wear today:")
      .setDescription(`👕 T-shirt\n🩳 Shorts\n🕶 Sunglasses\n👟 Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.snow) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("Snow is in the forecast for today:")
      .setDescription(`🥾 Don't forget your boots!`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.rain) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("Rain is in the forecast for today:")
      .setDescription(`Bring your 🥾 rain boots and an ⛱ umbrella!`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }
};
