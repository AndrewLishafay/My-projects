"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const app = express_1.default();
const http = require('http');
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cookie: true
});
const port = process.env.PORT || 4000;
app.use(express_1.default.static('client/build'));
app.use(express_1.default.json());
const rooms = [];
io.on("connection", (socket) => {
    console.log('user connected');
    socket.on('create-room', (name) => {
        console.log(name);
        socket.join(socket.id);
        const array = [];
        array[27] = { count: 0, color: '#EEEEEE' };
        array[26] = { count: 0, color: '#FF0000' };
        array[25] = { count: 0, color: '#EEEEEE' };
        array[24] = { count: 0, color: '#FF0000' };
        array.fill({ count: 0 }, 0, 27);
        array[0] = { count: 2, color: '#EEEEEE' };
        array[5] = { count: 5, color: '#FF0000' };
        array[7] = { count: 3, color: '#FF0000' };
        array[11] = { count: 5, color: '#EEEEEE' };
        array[12] = { count: 5, color: '#FF0000' };
        array[16] = { count: 3, color: '#EEEEEE' };
        array[18] = { count: 5, color: '#EEEEEE' };
        array[23] = { count: 2, color: '#FF0000' };
        rooms.push({ name, id: socket.id, isFull: false, board: array });
        socket.emit('rooms', rooms);
    });
    socket.on('get-rooms', () => {
        socket.emit('rooms', rooms);
    });
    socket.on('join-room', (id) => {
        const index = rooms.findIndex((room) => room.id === id);
        if (!rooms[index].isFull) {
            rooms[index].isFull = true;
            socket.join(id);
            socket.emit('rooms', rooms);
            io.in(id).emit("game-init");
        }
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        const index = rooms.findIndex((room) => room.id === socket.id);
        rooms.splice(index, 1);
    });
});
// app.listen(port, () => {
//     return console.log(`Express is listening at http://localhost:${port}`);
// });
server.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
