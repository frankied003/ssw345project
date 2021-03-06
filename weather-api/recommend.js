import { MessageAttachment, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export const checkWeather = async (data, msg) => {
  if (data.temp.max < 40) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's cold. You should wear a jacket today.")
      .setDescription(`๐งฅ Jacket\n๐ Pants\n๐งฃ Scarf\n๐งค Gloves\n๐ Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.temp.max >= 40 && data.temp.max < 60) {
    const exampleEmbed = new MessageEmbed()
      .setTitle(
        "Not too cold. Not too warm. Here's what you should wear today:"
      )
      .setDescription(`๐งฅ Light Jacket\n๐ Pants\n๐ Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.temp.max >= 60) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("It's warm out. Here's what you should wear today:")
      .setDescription(`๐ T-shirt\n๐ฉณ Shorts\n๐ถ Sunglasses\n๐ Sneakers`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.snow) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("Snow is in the forecast for today:")
      .setDescription(`๐ฅพ Don't forget your boots!`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }

  if (data.rain) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("Rain is in the forecast for today:")
      .setDescription(`Bring your ๐ฅพ rain boots and an โฑ umbrella!`);

    msg.channel.send({ embeds: [exampleEmbed] });
  }
};
