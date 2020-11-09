import { Module, HttpModule } from '@nestjs/common';
import { MaquinasController } from './maquinas.controller';
import { MaquinasService } from './maquinas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { General, GeneralSchema } from './Schemas/general.schema';

@Module({
  controllers: [MaquinasController],
  imports: [ HttpModule, MongooseModule.forFeature([{ name: General.name, schema: GeneralSchema }])],
  providers: [MaquinasService]
})

export class MaquinasModule { }
