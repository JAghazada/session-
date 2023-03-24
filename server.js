const express = require("express");
const app = express();
const routers = require("./routes/index")
const session = require("express-session")
const connect = require("./db/connection/connect");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const PORT =process.env.PORT || 3003
connect()
const store =  MongoStore.create({
    mongoUrl:process.env.DB_URI
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"testForSessionExample",
    resave:false,
    saveUninitialized:true,
    store: store
}))
app.use("/",routers)
app.listen(PORT,()=>{
})
