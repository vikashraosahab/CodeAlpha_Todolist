import {InputBox} from "./input_box"
import { Todo_container} from "./todo_container"
import {Time} from '../date_time/get_time'
import database from "../database/database"

const ContentBox = () => {
   let length = database.length
   let empty =  length <= 0 ? true : false
   let list = empty ? " " :  `<div class="todo-list-container">
    ${Todo_container (database)} 
  </div>` 
   
   setInterval (()=>{
      document.getElementById ("current-time").textContent = Time ()
   },1000)

    return `
        <div class="content-box">
           <div class = "content-box-header">
             <div class="logo">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/nfc-logo.png" alt="nfc-logo"/>
              <span>Your Notes </span>
             </div>
             <span id = "current-day"></span>
             <h3 id = "current-time"> ${Time()}</h3>                                
           </div>
           <div class = "content-box-input">
            <h3>To Do List</h3>
            ${InputBox()}
           </div>
          ${list}
        </div>
    `
}

export default ContentBox
