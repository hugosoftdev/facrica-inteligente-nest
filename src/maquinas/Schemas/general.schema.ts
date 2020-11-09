import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({strict: false})
//schema using strict to supress validations
export class General extends Document {
  @Prop()
  object: Object;
}

export const GeneralSchema = SchemaFactory.createForClass(General);