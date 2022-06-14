import express from "express";
const app = express();
import Logger from "./utils/Logger.js"
import db from "./db/sequelize.js"
const {productos,categorias} =db.models

app.listen(8080,async () => {
    Logger.success("listening at port 8080")
    await db.sync({force:true});
    Logger.success("db created");
    categorias.bulkCreate([ 
        {titulo: "Promos", subtitulo: "aprovecha los mejores precios",imagen:"https://res.cloudinary.com/pozters/image/upload/w_700/v1531312884/prod_uploads/qdK8393G69QVD6M" },
        { titulo: "Hamburguesas",imagen:"https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg" }, { titulo: "Nuggets", imagen:"https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg"} ]);

})