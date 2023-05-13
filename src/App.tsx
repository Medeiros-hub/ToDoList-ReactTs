import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { TasksInfo } from "./components/TasksInfo";
import { NoTask } from "./components/NoTask";
import { TaskList } from "./components/Task";
import styles from "./App.module.css";
import "./global.css";

export interface TaskInterface {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  }

  function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTask(e.target.value);
  }

  function handleNewTaskInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Você deve digitar uma nova tarefa");
  }

  function onCheckTask(id: string, complete: boolean) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: complete };
      }
      return task;
    });

    setTasks(updatedTask);
  }

  function onDeleteTask(id: string) {
    const deletedTask = tasks.filter(task => task.id !== id);
    setTasks(deletedTask);
  }

  function countCreatedTasks() {
    const countTasksById = tasks.filter(tasks => tasks.id).length;
    return countTasksById;
  }

  function countCompletedTasks() {
    const countTasksByCompleted = tasks.filter(task => task.isCompleted).length;
    return countTasksByCompleted;
  }

  return (
    <>
      <Header />
      <main className={styles.formGroup}>
        <form onSubmit={handleAddNewTask} className={styles.form}>
          <input
            name="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask.trimStart()}
            onChange={handleChangeTask}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <TasksInfo 
          createdTasks={countCreatedTasks} 
          completedTasks={countCompletedTasks} 
        />
        <div className={styles.tasks}>
          {tasks.length === 0 ? (
            <NoTask />
          ) : (
            tasks.map((task) => {
              return (
                <TaskList
                  key={task.id}
                  taskId={task.id}
                  taskContent={task.content}
                  taskCompleted={task.isCompleted}
                  onCheckTask={onCheckTask}
                  onDeleteTask={onDeleteTask}
                />
              );
            })
          )}
        </div>
      </main>
    </>
  );
}
