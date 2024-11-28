
const express=require("express");
const bodyparser=require("body-parser")
const app=express()
const port=process.env.PORT ||3000 ;
const cors = require("cors")
const routes=require("./src/routes/routes")

app.use(cors());
// requisição do tipo post
app.use(bodyparser.urlencoded({extended:true}))
app.use("/", routes)

app.listen(port, () => {

 
        console.log("Estamos rodando em: http://localhost:" + port );

    }
  );