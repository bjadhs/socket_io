import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// console.log(path.dirname(fileURLToPath(import.meta.url)));

const app = express();
// const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
    });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
