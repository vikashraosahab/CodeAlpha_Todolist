
const doneTask = () =>{
   let done_btn = document.querySelectorAll (".check-btns")
   done_btn.forEach ((btn,index)=>{
    btn.addEventListener ("click",()=>{
        let text = document.querySelectorAll(".task-text")[index]
             //   text.classList.add ("strike")
                console.log ("hello world")
                if (text.classList.contains("strike")) {
                    text.classList.remove("strike")
                }
                else text.classList.add ("strike")
        })
   })
}

export default doneTask