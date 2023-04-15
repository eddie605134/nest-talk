import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import * as flatten from 'flat';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from 'src/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async createUser(dto: CreateUserDto) {
    const { password } = dto;
    const hash = await bcrypt.hash(password, 12);
    return this.userModel.create({ ...dto, password: hash });
  }

  public useExist(username: string, password: string) {
    return this.userModel.exists({ $or: [{ username }, { password }] });
  }

  public updateUser(id: string, dto: UpdateUserDto) {
    const obj = flatten(dto);
    // return this.userModel.findByIdAndUpdate(id, dto, { new: true });
    return this.userModel.findByIdAndUpdate(id, { $set: obj }, { new: true });
  }

  public getUser(filters: FilterQuery<UserDocument>) {
    return this.userModel.findOne(filters).exec();
  }

  public getUsers(skip: number, limit: number) {
    return this.userModel.find().skip(skip).limit(limit);
  }

  public deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
