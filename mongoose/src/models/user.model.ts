import { Prop, Schema, raw, SchemaFactory } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

interface Name {
  firstName: string;
  lastName: string;
}

@Schema({
  versionKey: false,
})
export class User {
  @Prop(
    raw({
      firstName: { type: String },
      lastName: { type: String },
    }),
  )
  name: Record<string, string>;

  @Prop({
    required: true,
    unique: false,
    validate: {
      validator: (input: string) => isEmail(input),
    },
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

/**
 * type：指定属性的数据类型。例如：@Prop({type: String}) 将属性类型定义为字符串类型。Mongoose 支持的数据类型包括：String、Number、Boolean、Date、Buffer、Array、ObjectId、Map、Schema、甚至是自定义类型等。
required：指定属性是否必填。例如：@Prop({required: true}) 将属性定义为必填属性。默认值是 false。
default：指定属性的默认值。例如：@Prop({default: 'John Doe'}) 将属性定义为默认值为 'John Doe' 的属性。
unique：指定属性是否唯一。例如：@Prop({unique: true}) 将属性定义为唯一属性。
enum：指定属性可选的枚举值。例如：@Prop({enum: ['M', 'F']}) 将属性定义为 'M' 和 'F' 枚举值中的一个。
validate：指定属性的自定义验证函数。例如：@Prop({validate: [validateEmail, 'Invalid email']}) 将属性定义为必须满足 validateEmail 函数验证，并在验证失败时返回 'Invalid email' 错误消息。
get：指定属性的 getter 函数。例如：@Prop({get: getFormattedPrice}) 将属性定义为使用 getFormattedPrice 函数格式化后返回的属性。
set：指定属性的 setter 函数。例如：@Prop({set: setFormattedPrice}) 将属性定义为使用 setFormattedPrice 函数设置属性。
index：指定属性是否索引。例如：@Prop({index: true}) 将属性定义为索引属性。默认值是 false。
sparse：指定属性是否稀疏索引。例如：@Prop({sparse: true}) 将属性定义为稀疏索引属性。默认值是 false。
select：指定属性是否选择。例如：@Prop({select: false}) 将属性定义为不可选择属性。默认值是 true。
autopopulate：指定属性是否自动填充。例如：@Prop({autopopulate: true}) 将属性定义为自动填充属性。默认值是 false。
ref：指定属性的关联模型名称。例如：@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'}) 将属性定义为关联 User 模型的 ObjectId 类型属性。
 */
