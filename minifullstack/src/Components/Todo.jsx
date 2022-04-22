import "./Todo.css";
import { useState ,useEffect,useRef} from "react";
const Todo = ()=>{
let [arr,setArr]=useState([]);
  let [page,setPage] = useState(1);    
     useEffect(()=>{
        getTodo();
        
      },[page])

   const getTodo = ()=>{
    fetch(`http://localhost:8007/todolist?page=${page}&limit=5`).then((d)=>(d.json())).then((res)=>(setArr([...res])));
   
 
   }
  
   const divRef = useRef();

    const [text,setText] = useState({});
   const submission = (e)=>{
      e.preventDefault();
      
       
       fetch("http://localhost:8007/todolist",{
       method:"POST",
       body:JSON.stringify(text),
       headers:{
           "content-type":"application/json",
       },
   }).then(()=>(getTodo()))
    
   }

   const handle = (e)=>{
      const {name,value} = e.target;
  
      
      setText({...text,
        [name]:value
      });
   }

   const Delete=(e)=>{
    
       console.log(e._id);
       fetch("http://localhost:8007/todolist/"+e._id,{
       method:"DELETE"
       
       })
       getTodo();
   }

   
   
    return <div>
    
    <form onSubmit={submission}>
    <h1>Todo List</h1>
    <input onChange={handle} type="text" placeholder="please enter" name="todoItem"/>
    <input onChange={handle} type="text" placeholder="please enter" name="priority"/>

    <button>Submit</button>
     
   

    </form>
{arr.map(e=><div ref={divRef} key={e._id} className="divTag"><h3>Todo Item : {e.todoItem}</h3><p>Priority: {e.priority}</p><p className="time">Created at : {e.createdAt}</p>
     <button className="delete" onClick={()=>Delete(e)}>Delete</button>
     <input type="checkbox"/><label>Done</label>
     </div>)}

<button disabled={page===1} onClick={()=>setPage(page-1)}>Left</button>
<button disabled={arr.length===0}onClick={()=>setPage(page+1)}>Right</button>
    </div>
    
}

export default Todo;
