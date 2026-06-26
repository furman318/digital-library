const express = require("express");
const cors = require("cors");
const fs = require("fs"); 

const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(express.json());

let books = [];

app.get("/", function (request, response){
    response.send("сервер работает");
});

app.get("/api/message", function (request, response){
    response.json({
        message: "данные успешно получены с сервера node.js"
    });
});

// Этот маршрут теперь отдает ваши 10 книг из books.json
app.get("/api/books", function (request, response) {
    try {
        const fileData = fs.readFileSync("books.json", "utf8");
        const fileBooks = JSON.parse(fileData);
        
        const allBooks = [...fileBooks, ...books];
        response.json(allBooks);
    } catch (error) {
        console.error("Ошибка при чтении books.json:", error);
        response.status(500).json({ error: "Ошибка сервера при чтении каталога" });
    }
});

app.post("/api/upload-raw", function (request, response) {
    const { fileName, fileData } = request.body;
    
    const newBook = {
        id: Date.now(),
        title: fileName.replace(/\.[^/.]+$/, ""),
        serverPath: fileName,
        author: "Пользователь",
        size: "1 МБ",
        date: new Date().toLocaleDateString()
    };
    
    books.push(newBook);
    response.json({ success: true, serverPath: fileName });
});

app.listen(PORT, function(){
    console.log("сервер запущен: http://localhost:" + PORT);
});