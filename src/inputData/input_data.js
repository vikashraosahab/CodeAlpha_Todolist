// IMPORT DATABASE 
import ContentBox from "../components/content_box";
import { Todo_container } from "../components/todo_container";
import database from "../database/database";
import { Time } from "../date_time/get_time";
import render from "../re-rendering/render";

export const InputData = ()=>{
   let input = document.querySelector ("input");
   let addBtn = document.querySelector ("button")
   let obj;
   addBtn.addEventListener ("click",()=>{
       let task = input.value 
       obj = {
           id :database.length,
           day :new Date().getDay (),
           time : Time (),
           tasks : task, 
           status : "process"
       }
       database.push (obj) 
       render ()
       input.value = ""
   })
}