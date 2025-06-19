import database from "../database/database"

const EditTask = ()=>{
    let edit_btn = document.querySelectorAll (".task-edit")
    edit_btn.forEach ((btn,index)=>{
        btn.addEventListener ("click",()=>{
            let val = database[index]['tasks']
            // after the enter the edit button old task deleted
            database.splice (index,1) // deleted
           document.querySelector ("input").value = val;
        })
    })
}

export default EditTask