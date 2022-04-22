import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return JSON.stringify({
      status: process.env.STATUS,
      message: process.env.MESSAGE,
      timestamp: new Date().getTime(),
    });
  }
}
