import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true,'task title is required'],
            minLength: 7
        },
        text:{
            type: String,
            required: [true,'task text content is required'],
            minLength: 12,
        },
        priority:{
            type: String,
            required: ["high","medium", "low"],
            default:"low"
        },
        pinned: {
            type: Boolean,
            required: true,
            default: false
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required:[true, "user is required"]
        }
    },{timestamps:true},
);

//! task model
const Task = mongoose.model('task', taskSchema);
export default Task