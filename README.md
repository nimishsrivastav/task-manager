# Task Manager
  This API is created using Node.js and it's database is created using MongoDB.

### Features of this API
  * You can create, read, update, delete users and tasks.
  * Mails will be sent to your email address (if you enter correctly! :P) on creating new user and deleting user.
  
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
