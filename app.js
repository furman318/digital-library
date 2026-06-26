const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(express.json());

app.get("/", function (request, response){
    response.send("сервер работает");
});

app.get("/api/message", function (recuest, response){
    response.json({
        message: "данные успешно получены с сервера node.js"
    });
});

app.listen(PORT, function(){
    console.log("сервер запущен: http://localhost" + PORT);
});
