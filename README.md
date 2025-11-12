# **Float With the Most**

Float With the Most is an app that I built to help campers and floaters plan their events more easily. Gone are the days of hectic group chats, keeping track of payments in notepads, and at least one person forgetting to bring something to the event. Float With the Most allows you to create and manage an event for all of your friends in one place. Thanks to this tool you can take away the headaches of planning for all the same fun!

# **Tech Stack**
ReactJS, Java, Maven, Hibernate, Spring Boot, MySQL, Vite, CSS

# **Back-end Setup**
1. After forking and cloning my repo you'll need to create a folder called resources off of main.
   
*main*

*resources*

2. Then you'll need to create application.properties inside of resources.
   
*main*

*resources*
 
*application.properties*

3. You will need to setup application.properties as follows.
```   
spring.application.name=backend

spring.datasource.url=jdbc:mysql://127.0.0.1:3306/unit2_final_backend

spring.datasource.username=root

spring.datasource.password=[your-password-here]

spring.jpa.hibernate.ddl-auto=update

jwt.secret=[your-secret-here]
```
4. You will need to create a new MySQL database called unit2_final_backend and update the password in application.properties to match your database.

5. Open the project from the "backend" folder in an IDE(IntelliJ recommended). Then navigate to BackendApplication and run that file.

*backend*

*src*
 
*main*
  
*com.example.demo*

*BackendApplication*

# *Front-end Setup*
1. Open the project from the "unit-1-final" folder in an IDE(VSCode recommended). 

2. Type "npm install"(without quotations) into your terminal and press enter.

3. Type "npm run dev"(without quotations) into your terminal and press enter.

4. The app should start at http://localhost:5173. Ctrl + left click the link after Local: to automatically open the app in your browser.

# *Link to Wireframe:*
https://docs.google.com/document/d/1Hlr6MB9w7_t-P12MFj6S0g4HRxZWnz0fm3dIy7pcTLA/edit?tab=t.0

# *Link to ERD*
https://docs.google.com/spreadsheets/d/1lu5f9JePg4MObULMD_GcpDepEQpCwTACX5_5moPVxxo/edit?gid=0#gid=0

# *Future Features*
1. Ability to add how much an attendee owes for the event

2.  Refactoring EventsPage to only show Events you've been invited to

3. Use weather API to display weather for the events location

4. Add a forum page or chat feature to events

5. Update some stylings and make the app look a bit more modern

6. Add the ability to search for other user's profiles, maybe add a friends/contacts list
