
import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({

    todoItem:{type:String, required:true},
    priority:{type:String,required:true}

}
   ,
    {
        versionKey:false,
        timestamps:true
    }
)

const Todo = mongoose.model("todos",todoSchema);
export default Todo;