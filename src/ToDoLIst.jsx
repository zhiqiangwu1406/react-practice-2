import { useState } from "react";

const ToDoList = () => {

    const [Tasks,setTasks] = useState([]);
    const [NewTask, setNewTask] = useState("");


    const handleTextChange = (e) =>{
        setNewTask(e.target.value)
    }
    const addTasks = () => {
        setTasks([...Tasks, NewTask])
        document.getElementsByClassName("inputBox")[0].value = ""

    }

    const deleteTasks = (index) => {
        const FilteredTasks = Tasks.filter((_,i) => {
            return i != index;
        })
        setTasks(FilteredTasks);
    }

    const deleteAllTasks = () => {
        setTasks([]);
    }

    const handleKeys = (e) => {
        if (e.key === "Enter"){
            if(e.target.value === ""){
                return;
            }
            addTasks();
        }
    }

    const moveTaskUp = (index) => {
        if(index > 0 && index <= Tasks.length - 1){
            const UpTasks = [...Tasks];
            const temp = UpTasks.splice(index,1)[0];
            UpTasks.splice(index-1, 0 , temp);
            setTasks(UpTasks); 
        } else {
            return;
        }
    }

    const moveTaskDown = (index) => {
        if(index < Tasks.length - 1){
            const DownTasks = [...Tasks];
            const temp = DownTasks.splice(index,1)[0];
            DownTasks.splice(index+1, 0 , temp);
            setTasks(DownTasks);
        } else {
            return;
        }
    }

    const lightDarkSwitch = () => {
        const htmlTag = document.querySelector("html");
        const lightDarkBtnTag = document.querySelector(".lightDarkBtn");
        if (htmlTag.classList.contains("dark")){
            htmlTag.classList.remove("dark");
            lightDarkBtnTag.textContent = "🌙"
        } else {
            htmlTag.classList.add("dark");
            lightDarkBtnTag.textContent = "☀️"
        }
    }
    


    return ( <div className="flex flex-col items-center justify-center gap-6 m-6">
                <div className=" text-4xl font-bold dark:text-white m-2">To Do List</div>
                <button className="lightDarkBtn rounded-4xl bg-black absolute right-4 top-4 p-2 text-2xl cursor-pointer dark:bg-white"
                        onClick={lightDarkSwitch}>🌙</button>
               <div className="flex gap-4">
                 <input  type="text" 
                        className="inputBox p-3 rounded-2xl outline-2 outline-black focus:outline-2 focus:outline-blue-400 min-w-[500px] dark:outline-white dark:text-white" 
                        placeholder="Enter your tasks here..."
                        onChange={handleTextChange} 
                        onKeyDown={handleKeys}/>
                <button className="btn !rounded-2xl !border-0 " onClick={addTasks}>Enter</button>
                {Tasks.length>0 && <button className="btn !bg-red-500 !rounded-2xl !border-0" onClick={deleteAllTasks}>Delete All</button>} 
               </div>
                {Tasks && Tasks.map((task, index) => {
                    return  <div key={index} className="flex justify-between items-center border-2 border-gray-500 p-4 rounded-2xl min-w-[400px]">
                            <div className="text-2xl dark:text-white">{task}</div>
                            <div className="flex items-center gap-1">
                                <svg onClick={() => deleteTasks(index)} className="cursor-pointer" color="red" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                <div onClick={() => moveTaskUp(index)} className="cursor-pointer text-[22px]  rounded-2xl p-1 dark:bg-black">👆</div>
                                <div onClick={() => moveTaskDown(index)} className="cursor-pointer text-[22px] rounded-2xl p-1 dark:bg-black">👇</div>
                            </div>
                        </div>})}
                
            </div> )};

 
export default ToDoList;