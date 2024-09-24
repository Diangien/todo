import { Header } from "./components/Header";

import styles from './App.module.css'
import './global.css'
import { PlusCircle } from "phosphor-react";
import { Task, TaskType } from "./components/Task";
import { FormEvent, useState } from "react";

import { v4 as uuidv4 } from 'uuid'



export default function App(){


  
  let [task, setTask] = useState<TaskType>({id:uuidv4(), title:'', isCompleted:false});
  let [numberOfTasks,setNumberOfTasks] = useState<number>(0);
  //let [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState<number>(0);
  let [allTasks,setAllTasks] = useState<TaskType[]>([]);


  function handleCreateTask(event: FormEvent){
    
    event.preventDefault()

    if(task.title?.trim() == ''){
      return;
    }

    setAllTasks([...allTasks, task]);
    setTask({id:uuidv4(), title:'', isCompleted:false});
    setNumberOfTasks(allTasks.length + 1)
  }

  function deleteTask(taskToDelete:TaskType){

    const allTasksWithRemovedTask = allTasks.filter(task => task.id !== taskToDelete.id)
    
    setAllTasks(allTasksWithRemovedTask);
    setNumberOfTasks(allTasks.length - 1)
  }

  return (

    <div>
      <Header/>
      <div className={styles.container}>

        <form className={styles.addTaskContainer} onSubmit={handleCreateTask}>

          <input type="text" placeholder="Adicione uma Tarefa" onChange={e => setTask({...task,title:e.target.value})} value={task.title}/>

          <button type="submit">
            Criar <PlusCircle size={20}/>
          </button>

        </form>

        <div className={styles.taskContainer}>
          <header>
            <div className={styles.tarefasCriadas}>
              <span>Tarefas criadas</span>
              <span>{numberOfTasks}</span>
            </div>

            <div className={styles.tarefasConcluidas}>
              <span>Concluidas</span>
              <span>0 de {numberOfTasks}</span>
            </div>
          </header>

          <main>
            {
              allTasks.map((task) => {
                return (
                  <Task task={task} key={task.id} onDeleteTask={deleteTask}/>
                )
              })
            }
          </main>
        </div>



      </div>
    </div>
  )
}