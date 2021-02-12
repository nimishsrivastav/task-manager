# Task Manager
  This API is created using Node.js and it's database is created using MongoDB. Hosted using Heroku.

### Features of this API
  * You can create, read, update, delete users and tasks.
  * Mails will be sent to your email address (if you enter correctly! :P) on creating new user and deleting user.
  * Can be tested using any API testing tool, e.g., [Postman](https://www.postman.com/), [TalendAPI](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=en), etc.
  
### API Endpoints
  Here, I have used 12 endpoints:
  Methods | Function | Endpoints | Description
  ------- | -------- | --------- | -----------
  POST | Create User | /users | Used for creating a new user (and login the newly created user)
  POST | Login User | /users/login | Used to login user into API
  POST | Logout User | /users/logout | Used to logout user from the API
  POST | Logout All Sessions | /users/logoutAll | Used to logout user from all sessions, i.e., deleting all ayth tokens generated while logging in
  POST | Create Task | /tasks | To create new task using the logged in user
  GET | Read Profile | /users/me | To read user profile
  GET | Read Tasks | /tasks | To read all the tasks which logged in user has created
  GET | Read One Task | /tasks/:id | To read a particular task using task ID
  PATCH | Update User | /users/me | To update user info
  PATCH | Update Task | /tasks/:id | To update task info
  DEL | Delete User | /users/me | To delete logged in user
  DEL | Delete Task | /tasks/:id | To delete particular task using task ID
  
### Using the Production Version
  Download [Postman](https://www.postman.com/) or any API testing tool. Add the [URL](https://task-manager-api-using-nodejs.herokuapp.com) in the URL field and send the request.
  
### Development in this API
  Make sure that you have Node.js installed on your system. Download the Git repository and run following commands:
  
  * _npm init_ : To install necessary node packages.
  * _npm run dev_ : To fire up the local server.
  
  Create a _.env_ file and add below variables:
  
  * _PORT_ : To set up port value of the server (It is not necassary to put it in _.env_ file. You can declare the PORT value in _index.js_ file.)
  * _SENDGRID_API_KEY_ : It will store the API key from SendGrid account for sending mails.
  * _MONGODB_URL_ : It will store the URL of local MongoDB server.
  * _JWT_SECRET_ : It is used for user authentication purposes.
  
  That's it! Now you can modify the API as required and play around with it! :)
