import {InputBox} from "./input_box"
import { Todo_container} from "./todo_container"
import {Time} from '../date_time/get_time'

const ContentBox = () => {
   let empty = true;
   let list = empty ? " " : Todo_container () 
   let time = Time ()
   console.log (time)
    return `
        <div class="content-box">
           <div class = "content-box-header">
             <div class="logo">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/nfc-logo.png" alt="nfc-logo"/>
              <span>Your Notes </span>
             </div>
             <h3></h3>                                 
           </div>
           <div class = "content-box-input">
            <h3>To Do List</h3>
            ${InputBox()}
           </div>
           <div class="todo-list-container">
             ${list}
           </div>
        </div>
    `
}

export default ContentBox
