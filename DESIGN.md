
**Problem Statement**

Weather can be unpredictable. Weather technology has been improving, but mother nature always has the upper hand. When planning on going out in town, usually individuals check the current weather on their phone to see what the current weather is and what it may soon be. They look at numbers and that’s basically it. This is where WeatherNot comes in.

WeatherNot is an application that utilizes weather APIs to give users a detailed description of the weather through text and recommendations for what to wear for the day. As stated before, weather apps only give numbers, sometimes not enough data or too much data, and can be unorganized.   The problem with this, is that the weather is constantly changing. There are multiple factors that can cause the current weather to shift, such as a passing storm that drops several inches of rain in an area in just a few minutes. WeatherNot will utilize a simple input structure to give the user what they want and a little more. The app uses past and current data to predict the clothing for weather for the next twelve hours. The app is able to do this because it doesn’t simply look at raw data, but rather interprets it in a unique way. This is why WeatherNot uses a combination of the current conditions and a series of algorithms to predict the clothing for the weather for the morning, evening, and night.
 
**Bot Description**

Our product is an intelligent chat bot that specializes in giving accurate recommendations on what to wear based on the weather. WeatherNot will be hosted on an application called discord where users will be able to type specific information about their location as well as a time of when they plan to be going out. We want to give the user the best possible recommendations on what to where, so time and location are a necessity here. Our goal is to give the user what they want the first time, quickly, and accurately. People don’t want to spend more than a couple minutes looking at weather, so a conversational bot will not be a good fit here. In this case, we will fabricate a bot that responds to commands.

For a user to interact with our bot, they must type in a slash command, which is often used by active discord users, where they will simply put a zip code and time. There will be multiple formats of the slash command to make sure we don’t limit the users preference on how they want to interact with the bot. Formats meaning the way the user inputs time, or a zip code. Once the users interact with the bot using the slash command, the bot will return a detailed explanation of the weather and a recommendation of what to wear in a clean, easy to read, format. This response will include the amount of layers, type of clothing, what to bring if you are going to be outside for a while etc.

Tagline: Choosing clothes has never been easier!
 
**Use Cases**

Use Case 1: Get weather outlook for current day
1. Preconditions  
None.
2. Main Flow
	[S1] User provides a zip code using the slash command in order to gather weather data for that location on that day. 
[S2] Bot will display an overview of the weather forecast for the day including temperature and chance of precipitation. 
[S3] Bot will display detailed weather data including an hour-by-hour outlook.
3. Subflows
[S1] Users provide their zip code in the text input of the application. 
[S2] Bot will return an overview of the weather data. Users may choose to see a more detailed weather forecast.
[S3] Bot will show an hourly breakdown of the weather for the day among other detailed information.
4. Alternative Flows
[E1] User provides a specific date to request the corresponding weather forecast for that date.
[E2] User provides no zip code and the bot will assume the most recently used zip code in the system. 
 
Use Case 2: Get a recommendation of what to wear
1. Preconditions  
None.
2. Main Flow
	[S1] User requests recommendations of what to wear based on the weather data using a slash command. 
[S2] Bot will display suggestions on which articles of clothing are more appropriate based on the data provided. 
3. Subflows
[S1] User inputs a zip code and a request to see recommendations using the slash command in the Discord application.  
[S2] Bot will return a list of articles of clothing corresponding to various weather metrics like temperature, wind chill, and precipitation.  
4. Alternative Flows
[E1] User provides no zip code and bot cannot retrieve any previously used zip codes. 
[E2] User requests to see recommendations for another day by including a date in the slash command. 
 
**Design Sketches**

Sequence Flow:
![SSW 345 Sequence Flow (1)](https://user-images.githubusercontent.com/78944642/155905723-de9446e3-d4bd-4de9-8232-1b88f5078cb7.png)

Storyboard:
<img width="3000" alt="Untitled (5000 × 2000 px) (1)" src="https://user-images.githubusercontent.com/78944642/155905529-7487ed8c-817f-4117-9996-e0c1f63c13a3.png">

Scene 1:  
<img width="790" alt="scene 1" src="https://user-images.githubusercontent.com/78944642/155905678-6c018d3c-c9ef-4b5a-947f-90b578f7cde1.png">
Scene 2: 
<img width="790" alt="Storyboard(1)" src="https://user-images.githubusercontent.com/78944642/155905581-ab638bcb-ae8c-4fac-ac56-3331c90f12c8.png">
Scene 3:
<img width="793" alt="Scene 3" src="https://user-images.githubusercontent.com/78944642/155905614-c87bd5e0-4f96-4c1c-9b60-e5a5b4316fe0.png">
Scene 4:
<img width="787" alt="scene 4" src="https://user-images.githubusercontent.com/78944642/155905632-70ce980e-bc62-427c-8942-f23baad96763.png">
Scene 5: 
<img width="792" alt="scene 5" src="https://user-images.githubusercontent.com/78944642/155905634-d9e0cf4d-c79a-4b54-87b4-4f8b444ea5c8.png">
Scene 6:
<img width="787" alt="scene 6" src="https://user-images.githubusercontent.com/78944642/155905640-77cb140e-ef62-4b87-92a5-3f13bf034632.png">


**Architecture Design**

Description:
Our bot will be utilized using the discord API and within the discord application. There are three ways to access discord: browser, mobile, and desktop application. We decided to use discord because of the API they provide. The API provides wonderful documentation, especially in Node.JS, which is what our API and server will be built on.

Our API will be composed of Node.JS. This is where we will utilize the discord API (discord.js), the WeatherAPI, and any other formatting libraries we may need. A great aspect of using Node.JS is that it has many libraries created by other developers that our team can easily install and use within our own API. As shown in the stack diagram below, the middle-ware is basically checking the commands sent to the API before any calculations or processing is completed. We want to make sure that there’s no mistyped information that would confuse the algorithms that we have and send back a bad response. Once the checking is completed in the middle-ware, then the rest of the processes will start.

To compose the bot’s response to commands, the first step is to obtain the weather for that time and zip code using the weather API. WeatherAPI provides a great amount of data based on location and time. We will not need it all, but we will definitely utilize the various results and objects that it returns. After receiving the weather object, we will then run through an algorithm to select the best clothes for that weather. If it is cold, it recommends multiple layers, if it’s wet, the bot would suggest a raincoat or an umbrella. Similar aspects of weather such as wind, UV index, snow, humidity, rapid changes in temperature will also be considered of course. Below is also a diagram representing the core of what our API will be composed of as well as a flow.

Our API will be tested using our localhost server and then when we are ready to have Weather Not be constantly hosted, we will host it on a free Heroku server. Heroku is simple to use, as well as free, and has great documentation for applications like this.

For developing our bot application, we will be using Git and Github for source control as well as Jira Atlassian to keep track of our tasks. Within Jira, we will utilize the Kanban board because this project is not sprint related.

Stack Diagram:

![SSW345ProjectStack](https://user-images.githubusercontent.com/29928870/155905231-c048acf2-2dbb-4d80-8178-980a16a5fc58.PNG)

API Flow:

![SSW345ProjectAPIFlow](https://user-images.githubusercontent.com/29928870/155905322-fa8a5d59-46f3-4626-af75-530ef6bea3b6.PNG)
