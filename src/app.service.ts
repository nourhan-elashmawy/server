import { Injectable } from '@nestjs/common';

@Injectable() // this is for defining dependencies and reusable code
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomething(): string {
    return 'Something can be sent back here';
  }
}
