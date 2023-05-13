import styles from "./TasksInfo.module.css";

interface TasksInfoProps {
  createdTasks: () => number;
  completedTasks: () => number;
}

export function TasksInfo({ createdTasks, completedTasks }: TasksInfoProps) {


  return (
    <section className={styles.taskInfo}>
      <div>
        <strong className={styles.created}>Tarefas criadas</strong>
        <span className={styles.count}>{createdTasks()}</span>
      </div>
      <div>
        <strong className={styles.done}>Concluídas</strong>
        <span className={styles.count}>
          {completedTasks() > 0 ? (
            `${completedTasks()} de ${createdTasks()}`
          ) : (
            completedTasks()
          )}
        </span>
      </div>
    </section>
  );
}
