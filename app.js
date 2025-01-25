const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
const userRouter = require('./routes/user.routes')
const connectToDB = require('./config/db')

connectToDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs'); //to set the ejs (always present in views folder of the root directory)

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log("app running on port: " + PORT);
});
