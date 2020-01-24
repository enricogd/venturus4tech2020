import * as mongoose from 'mongoose'
import { Document } from 'mongoose'

const userActivityCommentsSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    comment: String,
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

export const userActivitySchema = new mongoose.Schema({
    userId: String,
    userName: String,
    fileName: String,
    likes: [String],
    timestamp: {
        type: Date,
        default: Date.now()
    },
    comments: [userActivityCommentsSchema]
})
