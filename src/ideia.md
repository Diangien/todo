# Como se pensou para isso 🤔🫠🫠?

## 1- Existe um array de tarefas

```
uma tarefa tem um título
uma tarefa pode ou não estar concluída
uma tarefa é um objecto
```

## 2- Uma tarefa é representada da seguinte forma
```js

    type Task = {
        id:number;
        title:string;
        isCompleted: string;
    }

```

## As variáveis necessárias para o sistema são

```js

    let task:Task;
    let numberOfTasks:number;
    let numberOfCompletedTasks:number;
    let allTasks: Task[];
```
## Programação declarativa

```
    1- Se existir tarefas, mostre - as na tela, caso não, exiba uma imagem de ausência de tasks

    2- Quando o usuário clicar em 'Criar +', faça:
         Cria um componente tarefa (ebiba em tela)
    3-Quando o usuário clicar em 'remover', faça:
        3.1- elimina a tarefa ~
    4- Quando o usuario clicar em chequed,
    actualiza a propriedade 'isCompleted' da tarefa

    5-Actualiza sempre os estados das variáveis:
        - allTasks: Task[]
        - numberOfTasks:number;
        - numberOfCompletedTasks:number;
```