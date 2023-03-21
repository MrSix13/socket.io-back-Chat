/* eslint-disable prettier/prettier */
import { OnModuleInit } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';

export interface Message {
  message: string;
  user: string;
}
const date = Date.now();
const today = new Date(date);

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class MyGeteway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      this.server.emit('users', socket.id);
    });
  }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: Message) {
    this.server.emit('onMessage', {
      contentss: body,
      date: today
    });
  }
}
