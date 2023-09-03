import { Document } from "mongoose";
import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User{
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