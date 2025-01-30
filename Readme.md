## Key Implementations ✅

# ES Modules (ESM) Setup
- Used modern import syntax instead of CommonJS (require)
- Resolved ESM __dirname limitation with:
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

# Express.js Server 🚀

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
- Utilized path.join() for cross-platform path resolution

const server = http.createServer(app);

- Explored Node.js core http module integration before opting for Express

- Demonstrated understanding of underlying HTTP server creation
- Pure Node.js core module equivalent:
// imports
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});