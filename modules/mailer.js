const path = require('path')

const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transporter = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    },
});

transporter.use('compile', hbs({

	viewEngine: {defaultLayout: false,},
	viewPath: path.resolve('./resources/mail/'),
	extName: '.html',

}));

module.exports = transporter;