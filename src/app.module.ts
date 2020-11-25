import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaquinasModule } from './maquinas/maquinas.module';
import { MaquinasService } from './maquinas/maquinas.service';

@Module({
  imports: [
    HttpModule,
    MaquinasModule
  ],
  controllers: [AppController],
  providers: [AppService, MaquinasService],
})
export class AppModule { }
