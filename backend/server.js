
require("dotenv").config();
const server = require("./src/app");
const connectedDb = require("./src/config/database");

connectedDb();




server.listen(3000,()=>{
    console.log("server is running on port 3000");
})