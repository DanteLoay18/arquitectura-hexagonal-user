import { Document } from "mongoose";
import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class User{

    @Prop({ type: 'UUID', default:uuidv4})
    _id: string;

    @Prop({
        unique:true
    })
    nombre: string;

    @Prop()
    apellidos: string;

    @Prop()
    activo:boolean;
}

export const UserSchema= SchemaFactory.createForClass(User)