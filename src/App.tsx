import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { Task, TaskType } from "./components/Task";
import { FormEvent, useState } from "react";

import styles from './App.module.css'
import './global.css'

import { v4 as uuidv4 } from 'uuid'

export default function App(){


  
  let [task, setTask] = useState<TaskType>({id:uuidv4(), title:'', isCompleted:false});
  let [numberOfTasks,setNumberOfTasks] = useState<number>(0);
  let [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState<number>(0);
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

    completeTask(taskToDelete,false)
    setAllTasks(allTasksWithRemovedTask);
    setNumberOfTasks(allTasks.length - 1)
    
    

  }

  function completeTask(taskToComplete:TaskType, isChecked:boolean){

    let newAllTasksWithCompleltedTasks = allTasks.map(task => {
      if(task.id == taskToComplete.id){
        task.isCompleted = isChecked;
      }
      return task;
    })

    const completedTasks = newAllTasksWithCompleltedTasks.filter(task => task.isCompleted)

    setAllTasks(newAllTasksWithCompleltedTasks);
    setNumberOfCompletedTasks(completedTasks.length)
   
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
              <span>Concluídas</span>
              <span>{numberOfCompletedTasks} de {numberOfTasks}</span>
            </div>
          </header>

          <main>
            {allTasks && allTasks.length > 0 
            ?
              allTasks.map((task) => {
                return (
                  <Task task={task} key={task.id} onDeleteTask={deleteTask} onCompleteTask={completeTask}/>
                )
              })
            :
              (
               <div className={styles.vazio}>
                  <img src="/todo/default.svg" alt="" />
                  <div>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
                
               </div>
              )
            }
          </main>
        </div>



      </div>
    </div>
  )
}