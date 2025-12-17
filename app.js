const express = require('express');
const app = express();
app.use(express.json());

const generalRoute = require('./routes/general');
app.use('/',generalRoute);

const authUserRoute = require('./routes/auth_users');
app.use('/',authUserRoute);

const portNo = 3000;
app.listen(portNo , () => {
    console.log('Server is running on port:'+portNo);
});
