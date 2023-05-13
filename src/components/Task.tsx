import { useState } from "react";
import { Trash, Circle, CheckCircle, IconContext } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface TaskListProps {
  taskId: string;
  taskContent: string;
  taskCompleted: boolean;
  onCheckTask: (id: string, check: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ 
  taskId,
  taskContent,
  taskCompleted, 
  onCheckTask,
  onDeleteTask
}: TaskListProps) {
  const [isCompleted, setIsCompleted] = useState(!taskCompleted);
  const [isOver, setIsOver] = useState(false);

  function handleCheckTask() {
    setIsCompleted(!isCompleted);
    onCheckTask(taskId, isCompleted);
  }
  
  function handleDeleteTask() {
    onDeleteTask(taskId);
  }

  return (
    <>
      <aside className={styles.taskContainer}>
        <div className={styles.task}>
          <IconContext.Provider
            value={{
              size: 24,
              onClick: () => handleCheckTask(),
              onMouseEnter: () => setIsOver(!isOver),
              onMouseLeave: () => setIsOver(!isOver)
            }}
          >
            {isCompleted ? (
              <Circle
                className={styles.circle}
                weight={isOver ? "duotone" : "regular"}
              />
            ) : (
              <CheckCircle
                className={styles.checkCircle}
                color="#ffffff"
                weight="fill"
                fill="#fff"
              />
            )}
          </IconContext.Provider>
          <span className={isCompleted ? styles.content : styles.contentThrough}>
            {taskContent}
          </span>
          <div onClick={handleDeleteTask} className={styles.trashContainer}>
            <Trash
              className={styles.trash}
              size={20}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
