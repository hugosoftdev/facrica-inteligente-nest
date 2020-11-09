import {
  Controller,
  Post,
  Get,
  Body,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { MaquinasService } from './maquinas.service';

@Controller('maquinas')
export class MaquinasController {
  constructor(
    private readonly maquinasService: MaquinasService,
  ) {}


  @Post('data')
  async createDoc(@Body() body, @Res() response: Response) {
    var data = await this.maquinasService.create(body);
    response.set("Access-Control-Allow-Origin", '*');
    response.set("Access-Control-Allow-Methods", '*');
    response.send(data);
  }

  @Get('data')
  async getAll(@Res() response: Response) {
    var data = await this.maquinasService.findAll();
    response.set("Access-Control-Allow-Origin", '*');
    response.set("Access-Control-Allow-Methods", '*');
    response.send(data);
  }
}
