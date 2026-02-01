import { error } from 'console'
import Task from '../model/task.model.js'
import router from '../routes/user.route.js'



export const getAll = async (req, res, next) => {
    try{

        const task = await Task.find({})

        res.status(200).json({
            message: 'tasks fetched',
            data: Task
        })
    }catch(error){
        next(error)
    }
}

//? get by id
export const getByid = async(req,res,next) => {
    try{

        const {id} = req.params
        const task = await Task.findOne({_id:id})

        if(!task){
            next({
                message : 'task not found',
                data : task
            })
        }
        // res.status()


    }catch(error){
        next(error)

    }
}

// export default router;
export const create = async(req, res, next)=> {
    try{

        console.log(req.headers)
        const{title,text,priority,user,pinned} = req.body
        if(!title){
            next({
                message: "task title is required",
                status: 400
            })
        }
        if(!user){
            next({
                message: "user is required",
                status: 400
            })
        }

        const task = await Task.create({title, text, priority,user, pinned})

        res.status(201).json({
            message: "task created",
            data: task
        })

    }catch(error){
        next(error)
    }
}

//!
export const update = async(req, res, next) => {
    try{
        const{id} = req.params
        const{title, text, priority, pinned} = req.body
        const task = await Task.findOne({_id:id,user:user})

        if(!task){
            next({
                message: "task is not found",
                status: 400
            })
            return
        }
        if(!title){
            task.title = title
        }
        if(!priority){
            task.priority = priority
        }
        if(!pinned){
            task.pinned = pinned
        }
        await task.save();

    }catch(error){
        next(error)
    }
}

//? update



//? delete
export const remove = async(req,res,next) => {
    try{
        const{id}= req.params;
        const{user}= req.body;

        const task = await Task.findOne({_id:id,user:user})

        if(!task){
            next({
                message:" task not found",
                status: 400
            })
            return
        }

        await task.deleteOne()

        res.status(200).json({
            message: `task ${task._id} deleted`,
            data: null
        })

    }catch(error){
        next(error)
    }
}

//? pinned

//? get all pinned


