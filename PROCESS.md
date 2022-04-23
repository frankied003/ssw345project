# Use Cases
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
 
# Story Creation 
1. Create an account for the server 
2. Create the Server
3. Create discord application within discord developer portal 
4. Add discord bot to server using discord.js
5. Create basic discord command 
6. Hookup OpenWeather API
7. Get parameters from slash command to hook up into API 
8. Create recommendations based on weather API data 
9. Format bot message to look appealing 

# Kanban Screenshots
Iteration 1:
<img width="960" alt="image" src="https://user-images.githubusercontent.com/78944642/164934493-45b6e39c-9fcb-46ab-a228-15bb50cfea8a.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/78944642/164934532-28b2429d-c237-4851-a905-408b0b168c3d.png">

Iteration 2:
<img width="958" alt="image" src="https://user-images.githubusercontent.com/78944642/164934319-f7ecd2d1-2adb-472b-ac75-dad47feb0c92.png">

# Meeting Notes/Agenda 
1. February 20th, 2022
  * Finalize use cases
  * Finalize design sketches
  * Start putting together storyboard
  * Finalize architecture design 
2. February 27th, 2022
  * Overall on track 
  * Finalize design.md 
3. March 27th, 2022
  * Discuss steps for first iteration 
  * Create story points based on use cases
  * Work was divided 
4. April 17, 2022
  * Finalize iteration 1 
  * Create story points for iteration 2
  * Divide work for iteration 2
5. April 21st, 2022
  * Process.md file needs to be completed
  * Kanban board needs story point updates
  * Add more issues
  * Continue to progress through bot project
  * Finalize basic functions 
6. April 23rd, 2022
  * ...
# Iteration Documentation
1. Iteration 1
   * End date: ...
   * Completed Tasks
     * create an account for the server
     * create discord application within discord developer portal 
     * create the server
   * Incomplete Tasks
     * add discord bot to server using discord.js
     * create basic discord command 
     * hookup OpenWeather API
     * format bot message to look appealing 
     * create recommendations based on weather API data 
     * get parameters from slash command to hook up into API
   * Process Reflection
     * ...
2. Iteration 2
   * End date: ...
   * Completed Tasks
     * create an account for the server
     * create discord application within discord developer portal 
     * create the server
     * add discord bot to server using discord.js
     * create basic discord command
   * Incomplete Tasks
     * hookup OpenWeather API
     * format bot message to look appealing 
     * create recommendations based on weather API data 
     * get parameters from slash command to hook up into API
   * Process Reflection
     * ...

# Overall Reflection 