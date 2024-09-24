import { Trash } from "phosphor-react";

import styles from './Task.module.css'


export interface TaskType{
    id?:number;
    title?:string;
    isCompleted?: boolean;
}

interface TaskProps{
    task: TaskType;
}



export function Task({task}:TaskProps){
    return(
        <div className={styles.task}>
          
            <input type="checkbox" className={styles.checkbox}/>
           

            <div className={styles.taskTitle}>
                {task.title}
            </div>

            <div className={styles.removeTask}>
                <Trash size={24}/>
            </div>
        </div>
    )
}