import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { General, GeneralSchema } from './Schemas/general.schema';

@Injectable()
export class MaquinasService {
  constructor(@InjectModel(General.name) private readonly generalModel: Model<General>) {}

  async create(data): Promise<General> {
    var obj = {date: new Date(), data: data};
    const createdDoc = new this.generalModel(obj);
    console.log(createdDoc);
    return createdDoc.save();
  }

  async findAll(): Promise<General[]> {
    return this.generalModel.find().exec();
  }
}


