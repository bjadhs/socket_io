import express from 'express';
import {createServer} from 'http';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
// import cors from 'cors';

// console.log(path.dirname(fileURLToPath(import.meta.url)));

const app = express();
const server = createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url));
const io = new Server(server);
//      ,{
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// }
// );

// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(join(__dirname,'public', 'index.html'));
    });

io.on('connection', (socket)=>{
    console.log('A user connected', socket.id);

    socket.on('message_from_client', (m)=>{
        console.log('Message from client: ', m);
        // broadcast message to all clients
        io.emit('message_from_server', m);
    })

    socket.on('disconnect',()=>{
        console.log('A user disconnected', socket.id);
    })
})



const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
