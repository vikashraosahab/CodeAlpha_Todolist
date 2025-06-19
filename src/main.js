import ContentBox from "./components/content_box";
import { Todo_container } from "./components/todo_container";
import deleteTask from "./deletion/delete_task";
import { InputData } from "./inputData/input_data"

document.querySelector ("#app").innerHTML  = ContentBox ()

InputData ()