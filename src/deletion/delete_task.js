import database from "../database/database";
import render from "../re-rendering/render";

const deleteTask = ()=>{
   let delete_btn = document.querySelectorAll (".task-delete")
   delete_btn.forEach ((btn,index)=>{
       btn.addEventListener ("click",()=>{
           database.splice (index,1)
           render ()
       })
   })
}


export default deleteTask