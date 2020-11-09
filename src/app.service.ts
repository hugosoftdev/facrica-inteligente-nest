import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return 'Hello World do Projeto de IOT';
  }
}
