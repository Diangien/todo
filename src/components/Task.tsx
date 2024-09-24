import { Trash } from "phosphor-react";

import styles from './Task.module.css'


export interface TaskType{
    id:string;
    title:string;
    isCompleted: boolean;
}

interface TaskProps{
    task: TaskType;
    onDeleteTask: (taskToDelete:TaskType) => void;
}



export function Task({task, onDeleteTask}:TaskProps){

    function handleDeleteTask(){
        onDeleteTask(task)
    }

    return(
        <div className={styles.task}>
          
            <input type="checkbox" className={styles.checkbox}/>
           

            <div className={styles.taskTitle}>
                {task.title}
            </div>

            <div className={styles.removeTask} onClick={handleDeleteTask} title="Deletar Tarefa😊">
                <Trash size={24}/>
            </div>
        </div>
    )
}