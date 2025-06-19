import ContentBox from "../components/content_box";
import deleteTask from "../deletion/delete_task";
import { InputData } from "../inputData/input_data";
import doneTask from "../modify/done_task";
import EditTask from "../modify/modify_task";

export default function render () {
    document.getElementById ('app').innerHTML = ContentBox ()
    InputData (); // Method that add task that given by user himself
    deleteTask () // METHOD THAT DELETE TASK FROM THE TODO LIST
    EditTask () // EDIT TASK BY USING INPUT 
    doneTask () // DONE THE CURRENT TASK BY STRIKE A LINE OVER IT
}
