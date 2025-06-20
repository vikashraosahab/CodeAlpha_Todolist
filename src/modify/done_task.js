import database from "../database/database"
import render from "../re-rendering/render"

const doneTask = () =>{
   let done_btn = document.querySelectorAll (".check-btns")
   done_btn.forEach ((btn,index)=>{
    btn.addEventListener ("click",()=>{
        let text = document.querySelectorAll(".task-text")[index]
             //   text.classList.add ("strike")
             if (database[index]['done']) {
                database[index]['done'] = false;
             }
             else {
                database[index]['done'] = true
             }

            render ()
        })
   })
}

export default doneTask