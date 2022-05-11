
# Problem Statement 
Weather can be unpredictable. Weather technology has been improving, but mother nature always has the upper hand. When planning on going out in the town, usually individuals check the current weather on their phone to see what the current weather is and what it may soon be. They look at numbers and that’s it. This is where WeatherNot comes in.

WeatherNot is a Discord bot that utilizes weather APIs to give users a detailed description of the weather through text and recommendations for what to wear for the day. As stated before, weather apps only give numbers, sometimes not enough data or too much data, and can be unorganized. The problem with this is that the weather is constantly changing. Multiple factors can cause the current weather to shift, such as a passing storm that drops several inches of rain in an area in just a few minutes. WeatherNot utilizes a simple input structure to give the user what they want and a little more. The bot uses past and current data to predict the clothing for weather for the specific area based on zip code. The bot can do this because it doesn’t simply look at raw data, but rather interprets it uniquely. This is why WeatherNot uses a combination of the current conditions and a series of algorithms to predict the clothing for the weather for the morning, evening, and night.


# Primary features/Screenshots 
- Obtain weather data for a specified area based on the zip code entered. 
- Users enter getWeather and their zip code and the weather API data is returned.   
<img width="960" alt="image" src="https://user-images.githubusercontent.com/78944642/167749894-a2330309-ee12-48a5-ab42-16af60673252.png">


- Obtain clothing recommendations based on the weather in the specified zip code provided.
- Users enter whatToWear and their zip code and the clothing recommendations appear with emojis as well as a short message of what the weather is like that day.  
<img width="960" alt="image" src="https://user-images.githubusercontent.com/78944642/167749927-49ff16e0-f557-4c06-ab1b-377d3920bce4.png">

# Reflection 
Starting the bot was relatively straightforward. Discord.JS has very well-written documentation on how to create a server, create a simple bot, and add it to the server. After adding the bot, customizing it to our liking was the difficult part. We ended up having to use two different APIs to get the weather for a zip code. One API was the Open Weather API to get the weather based on coordinates, and the other was the Google Maps API to get the coordinates of a zip code. After setting up these in a succession of each other, we were able to get the daily weather of the zip code.

The next step was to create the recommendations which was a more difficult aspect of the project. The main algorithm takes in the ranges and importance of certain weather conditions which can be seen in the recommend.js file.

After combining these two methods and having the return values, we were able to hook up commands within the bot to parse zip codes from the message and return the data.

# Limitations 
The current limitation is that it is a little hard to read the current weather and differentiate the time between the day. So if it rains at night, but is perfect during the day, the bot will not recommend the correct clothing for the night. Additionally, the bot is only able to be specific to zip code and that's it. Even though the zip code is good enough and is not too big of a mile radius, it's not perfect.

# Future Work 
In the future, we hope to implement a feature where users can get clothing recommendations for the morning, evening, and night. Right now the bot allows users to get the clothing recommendations based on the weather in that specific area at that specific time. We hope to implement a feature that will show clothing recommendations for the whole day in case there is unpredictable weather such as rain later in the day to let the user know they will need to wear a hoodie or bring an umbrella.

Additionally, we would like to implement more specific weather for a more specific location. Currently, it's only for zip codes, but the user should be able to enter coordinates and then get weather/recommendations for that specific coordinate.

One more feature, rather an aspect we could implement in the bot is NLP. It's a big step, but having the user type in English rather than straight commands would be very beneficial for the user experience.

# Presentation 
Video Link: https://www.canva.com/design/DAE_pnk64Oc/2a3QhaQG7wn5a-maK9cEFw/watch?utm_content=DAE_pnk64Oc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

