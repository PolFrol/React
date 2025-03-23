import { useProgressbar } from './use-progress-bar';

export const ProgressBar = () => {
  const progressBarRef = useProgressbar();

  return (
    <div id="scroll" style={{ position: "fixed", top: "0", width: "100%", height: "5px", "backgroundColor": "red" }}>
      <div ref={progressBarRef} style={{ height: "5px", "backgroundColor": "green"}}/>
    </div>
  );
};
