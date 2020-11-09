import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaquinasModule } from './maquinas/maquinas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MaquinasService } from './maquinas/maquinas.service';
import { General, GeneralSchema } from './maquinas/Schemas/general.schema';


@Module({
  imports: [
    HttpModule,
    MaquinasModule,
    MongooseModule.forRoot('mongodb://localhost:27017/fabrica-inteligente'),
    MongooseModule.forFeature([{ name: General.name, schema: GeneralSchema }])
  ],
  controllers: [AppController],
  providers: [AppService, MaquinasService],
})
export class AppModule { }
