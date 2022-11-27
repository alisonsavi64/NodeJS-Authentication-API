const express = require('express');
const app = express();
const port = 8000;
const userLogin = require('./routes/userLogin')

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use('/login', userLogin);

app.listen(port, () => {console.log(`Server is listening on port ${port}`)})