import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [record, setRecord] = useState(false);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
      if (seconds <= 0) {
        setRecord(true);
      }
    }


    setTimerActive(true);
  }, [seconds, timerActive]);

  return (
    <div>
      {record ? (
        <div id="startRecTime" className="box">
          <div className="boxIcon">
            <span className="recfeedback-value">
              <em className="recfeedback-icon icon"></em>
            </span>
          </div>
          <div className="boxText">
            <p>Recording...</p>

            <div className="progressbar">
              <span className="progressbar-value">
                <em
                  style={{ left: "0%" }}
                  id="progressBar"
                  className="progressbar-cover"
                ></em>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div id="startPrepTime" className="box">
          <div className="boxIcon">
            <span className="recfeedback-value">
              <em className="clock-icon icon"></em>
            </span>
          </div>
          <div className="boxText">
            <p>Preparation Time</p>

            <span id="progressTimer" style={{ color: "#0056bf" }}>
              {seconds}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
