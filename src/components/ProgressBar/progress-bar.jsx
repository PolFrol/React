import { useProgressbar } from './use-progress-bar';
import styles from './progress-bar.module.css';

export const ProgressBar = () => {
  const percent = useProgressbar();

  return (
    <div className={styles.bar}>
      <div className={styles.progress} style={{ width: `${percent}%`}}/>
    </div>
  );
};
