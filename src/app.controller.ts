import {
  Controller,
  Post,
  Get,
  Body,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { MaquinasService } from './maquinas/maquinas.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly maquinasService: MaquinasService) { }

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  //redirecionando para o serviço de maquinas na url root também
  @Post()
  async entryPoint(@Body() body, @Res() response: Response) {
    var data = await this.maquinasService.create(body);
    response.set("Access-Control-Allow-Origin", '*');
    response.set("Access-Control-Allow-Methods", '*');
    response.send(data);
  }
}
