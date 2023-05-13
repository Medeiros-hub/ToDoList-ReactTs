import clipboardIcon from "../assets/Clipboard.svg";
import styles from "./NoTask.module.css";

export function NoTask() {
  return (
    <section className={styles.noTask}>
      <div className={styles.noTaskcontent}>
        <img src={clipboardIcon} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  );
}
