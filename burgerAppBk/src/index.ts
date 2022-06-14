import express from "express";
const app = express();
import Logger from "./utils/Logger.js"



app.listen(8080,() => {
    Logger.success("listening at port 8080")
})