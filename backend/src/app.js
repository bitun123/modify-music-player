const express = require("express");
const userRouter = require("./routes/user.routes");
const cookie  = require("cookie-parser");


//call express to create an app
const app = express();
app.use(cookie());


app.use(express.json());



app.use("/api/auth", userRouter);

module.exports = app;
