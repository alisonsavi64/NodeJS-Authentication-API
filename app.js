require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/index')(app);

app.listen(port, () => {console.log(`Server is listening on port ${port}`)});