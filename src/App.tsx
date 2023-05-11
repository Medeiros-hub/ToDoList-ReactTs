import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TasksInfo } from "./components/TasksInfo";

import clipboardIcon from "./assets/Clipboard.svg";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.formGroup}>
        <Form />
        <TasksInfo />
        <div className={styles.tasks}>
          <section className={styles.noTask}>
            <img src={clipboardIcon} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </section>
        </div>
      </div>
    </>
  );
}
