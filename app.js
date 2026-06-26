const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// Разрешаем CORS
app.use(cors());

// ИСПРАВЛЕНИЕ "Payload Too Large": Увеличиваем лимиты для приема файлов
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Автоматически создаем папку для файлов, чтобы не было ошибок
const UPLOADS_PATH = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_PATH)) {
    fs.mkdirSync(UPLOADS_PATH);
}

// --- МАРШРУТЫ ---

// 1. Устраняем 404 на главной странице сервера
app.get("/", (req, res) => {
    res.send("Сервер библиотеки Гасу работает успешно!");
});

// 2. Маршруты авторизации
app.post("/api/auth/register", (req, res) => {
    const { fullName, email } = req.body;
    res.json({ message: "Регистрация успешна", user: { fullName, email }, token: "token123" });
});

app.post("/api/auth/login", (req, res) => {
    const { email } = req.body;
    res.json({ message: "Вход выполнен", user: { fullName: "Студент Гасу", email }, token: "token123" });
});

// 3. Маршрут ЗАГРУЗКИ файла (Base64)
app.post("/api/upload-raw", (req, res) => {
    const { fileName, fileData } = req.body;

    if (!fileData) return res.status(400).json({ message: "Файл не получен" });

    // Убираем технический заголовок Base64
    const base64Data = fileData.split(';base64,').pop();
    const uniqueName = Date.now() + "-" + fileName;
    const filePath = path.join(UPLOADS_PATH, uniqueName);

    // Сохраняем файл стандартным средством fs
    fs.writeFile(filePath, base64Data, { encoding: 'base64' }, (err) => {
        if (err) {
            console.error("Ошибка записи:", err);
            return res.status(500).json({ message: "Ошибка сохранения на сервере" });
        }
        res.json({ message: "Файл сохранен", serverPath: uniqueName });
    });
});

// 4. Маршрут для ОТКРЫТИЯ файла
app.get("/api/files/:filename", (req, res) => {
    const filePath = path.join(UPLOADS_PATH, req.params.filename);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("Файл не найден");
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});