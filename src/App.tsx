import { Header } from "./components/Header";

import styles from './App.module.css'
import './global.css'
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/taks";

export default function App(){
  return (
    <div>
      <Header/>
      <div className={styles.container}>

        <div className={styles.addTaskContainer}>
          <input type="text" placeholder="Adicione uma Tarefa"/>
          <button>Criar <PlusCircle size={20}/></button>
        </div>

        <div className={styles.taskContainer}>
          <header>
            <div className={styles.tarefasCriadas}>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>

            <div className={styles.tarefasConcluidas}>
              <span>Concluidas</span>
              <span>0</span>
            </div>
          </header>


          <main>
            <Task/>
            <Task/>
          </main>
        </div>



      </div>
    </div>
  )
}