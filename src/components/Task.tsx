import { Trash } from "phosphor-react";
import styles from './Task.module.css'



export interface TaskType{
    id:string;
    title:string;
    isCompleted: boolean;
}

type TaskProps = {
    task: TaskType;
    onDeleteTask: (taskToDelete:TaskType) => void;
    onCompleteTask : (taskToComplete: TaskType, isCompleted:boolean) => void;
}



export function Task({task, onDeleteTask, onCompleteTask}:TaskProps){

    
    function handleDeleteTask(){
        onDeleteTask(task)
    }

    function handleCompleteTask(event: React.ChangeEvent<HTMLInputElement>){
        onCompleteTask(task, event.target.checked)
    }

    return(
        <section className={styles.task}>
          
            <div className={styles.checkbox}>
                <input type="checkbox"  onChange={handleCompleteTask} id={task.id}/>
                <label htmlFor={task.id}></label>
            </div>
           

            <div className={styles.taskTitle} >
                {task.title}
            </div>

            <div className={styles.removeTask} onClick={handleDeleteTask} title="Deletar Tarefa😊">
                <Trash size={24}/>
            </div>
        </section>
    )
}