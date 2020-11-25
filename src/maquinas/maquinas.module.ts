import { Module, HttpModule } from '@nestjs/common';
import { MaquinasController } from './maquinas.controller';
import { MaquinasService } from './maquinas.service';

@Module({
  controllers: [MaquinasController],
  imports: [ HttpModule ],
  providers: [MaquinasService]
})

export class MaquinasModule { }
