import {Router} from 'express';
import  Todo from '../Model/model.js';
const router = Router();


router.get("/",async(req,res)=>{

    const page = +req.query.page||1;
    const size = +req.query.limit||5;
    const offset = (page-1)*size;

    
    try{
    const Data =  await Todo.find().skip(offset).limit(size).lean().exec();
    return res.status(200).send(Data);
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message });
    }
})


router.post("/",async(req,res)=>{
    
   
try{
     const Data =  await Todo.create(req.body);
     return res.status(200)(Data);

}
catch(e){
    return res.status(500).json({ status: "failed", message: e.message });
}
});

router.delete("/:id",async(req,res)=>{
    try{
    const Data = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).send(Data);
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message });
    }
})


const TodoController = router;
export default TodoController;