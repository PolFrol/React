import { useProgressbar } from './use-progress-bar';

export const ProgressBar = () => {
  const percent = useProgressbar();

  return (
    <div style={{ position: "fixed", top: "0", width: "100%", height: "5px", backgroundColor: "red" }}>
      <div style={{ width: `${percent}%`, height: "5px", backgroundColor: "green"}}/>
    </div>
  );
};
