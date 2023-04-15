import { Prop, Schema, raw, SchemaFactory } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, minlength: 3, maxlength: 20 })
  username: string;

  @Prop({
    required: true,
    validate: {
      validator: (v: string) => isEmail(v),
      message: (props) => `${props.value} is not a valid email!`,
    },
  })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
