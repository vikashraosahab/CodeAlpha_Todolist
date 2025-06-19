
const doneTask = () =>{
   let done_btn = document.querySelectorAll (".check-btns")
   done_btn.forEach ((btn,index)=>{
    btn.addEventListener ("click",()=>{
        let text = document.querySelector(".task-text")
        text.classList.add ("strike")
        if (!btn.style.backgroundColor = ) {
            btn.style.backgroundColor = "red"
        }
    })
   })
}

export default doneTask