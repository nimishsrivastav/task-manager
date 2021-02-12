const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);