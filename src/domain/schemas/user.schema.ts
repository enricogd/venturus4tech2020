import * as mongoose from 'mongoose'
import { Document } from 'mongoose'
import { MongooseModule } from '@nestjs/mongoose'

export interface User extends Document{
    readonly _id: mongoose.Schema.Types.ObjectId
    readonly userLogin: string
    readonly userName: string
    readonly password: string
}

export const userSchema = new mongoose.Schema({
    userLogin: String,
    userName: String,
    password: String
})