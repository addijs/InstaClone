const http = require('./express');
const io = require('socket.io')(http);

const controller = require('../../models/Record/controller');

module.exports = () => {
  const connectedUsers = {};

  io.on('connection', socket => {
    console.log(`The user ${socket.id} has connected`);
    const { user } = socket.handshake.query;
    connectedUsers[socket.id] = user;
    console.log(connectedUsers);
  
    io.emit('users', connectedUsers);
  
    socket.on('get', async (data) => {
      const users = [
        connectedUsers[data[0]],
        connectedUsers[data[1]],
      ];
  
      const reg = await controller.findReg(users);
      if (reg) io.emit('messages', reg.storage);
      else io.emit('messages', []);
    });
    
    socket.on('message', async (data) => {
      const users = [
        connectedUsers[data.from], 
        connectedUsers[data.target]
      ];
  
      console.log(data.target, socket.id);
  
      let aux = await controller.findReg(users);
  
      if (!aux) aux = await controller.createReg(users);
  
      const message = {
        from: users[0],
        message: data.message
      }
      const reg = await controller.saveMsg(aux, users, message);
      io.to(data.target).to(data.from).emit('messages', reg.storage);
    });
  
    socket.on('disconnect', () => {
      delete connectedUsers[socket.id];
      console.log(`User ${socket.id} has disconnected`);
      console.log(connectedUsers);
      io.emit('users', connectedUsers);
    })
  });
}