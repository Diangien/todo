import { Trash } from "phosphor-react";

import styles from './Task.module.css'


type TaskProps = {
    id:number;
    title:string;
    isCompleted: boolean;
}

export function Task({}:TaskProps){
    return(
        <div className={styles.task}>
          
                <input type="checkbox" className={styles.checkbox}/>
           

            <div className={styles.taskTitle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta beatae dolor, aliquam cupiditate asperiores necessitatibus vel libero, autem amet ratione voluptas modi delectus dignissimos earum. Voluptate suscipit expedita ipsam nam.
            </div>

            <div className={styles.removeTask}>
                <Trash size={22}/>
            </div>
        </div>
    )
}