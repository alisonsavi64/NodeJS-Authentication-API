require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/projects', projectController);

app.listen(port, () => {console.log(`Server is listening on port ${port}`)});