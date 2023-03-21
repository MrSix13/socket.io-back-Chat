/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    /* this.socketClient = io('https://react-nest-websocket.vercel.app/'); production url */
    this.socketClient = io('http://localhost:3001');
  }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('connect');
    });
    this.socketClient.on('onMessage', () => {
      console.log('llego mensaje?');
    });
  }
}
