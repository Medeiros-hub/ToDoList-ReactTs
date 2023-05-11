import styles from "./TasksInfo.module.css";

export function TasksInfo() {
  return (
    <section className={styles.taskInfo}>
      <div>
        <strong className={styles.created}>Tarefas criadas</strong>
        <span className={styles.count}>0</span>
      </div>
      <div>
        <strong className={styles.done}>Concluídas</strong>
        <span className={styles.count}>0</span>
      </div>
    </section>
  );
}
