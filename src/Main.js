import { useEffect, useState } from "react";
import Task5CP from "./content/Task5CP";
import "./styles/scStyles.css";
import { Link } from "react-router-dom";
import Task5CH from "./content/Task5CH";
import Task6 from "./content/Task6";

function Main({ taskNumber }) {
  const [taskId, setTaskId] = useState(1);
  const [prep, setPrep] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [rec, setRec] = useState("");
  const [recTime, setRecTime] = useState("");

  useEffect(() => {
    setTaskId(taskNumber);
    switch (taskNumber) {
      case 1:
        setPrep("");
        setPrepTime("");
        setRec("");
        setRecTime("");
        break;
      case 2:
        setPrep("Preparation:");
        setPrepTime("60 seconds");
        setRec("");
        setRecTime("");
        break;
      case 3:
        setPrep("Preparation:");
        setPrepTime("60 seconds");
        setRec("Recording:");
        setRecTime("60 seconds");
        break;
      default:
        break;
    }
  }, [taskNumber]);

  const Links = {
    1: { back: "", next: "/task5-choice" },
    2: { back: "/", next: "/task6" },
    3: { back: "/task5-choice", next: "" },
  };

  const renderTaskContent = () => {
    switch (taskId) {
      case 1:
        return <Task5CP />;
      case 2:
        return <Task5CH />;
      case 3:
        return <Task6 />;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <div>
      <section className="container" id="main-container">
        <link rel="stylesheet" href="styles/scStyles.css" />
        <div id="panelTop">
          <div id="canvasName">
            Practice Test A - Speaking Task 5: Comparing and Persuading
          </div>
          <div className="btnNext span1 pull-right fl-r">
            <Link
              to={Links[taskId]["next"]}
              id="btnNext"
              className="btn btn-primary"
            >
              NEXT
            </Link>
          </div>
          <div id="timer" className="d-block fl-r">
            {prep}
            <strong style={{color: "rgb(0, 0, 0)"}}>{prepTime}</strong> 
            {rec}
            <strong style={{color: "rgb(0, 0, 0)"}}>{recTime}</strong>
          </div>
        </div>
        {renderTaskContent()}
      </section>
      <div className="container" id="footer">
        <div className="row">
          <div className="mr-20">
            <Link
              to={Links[taskId]["back"]}
              id="btnBack"
              className="btn btn1 hide btn-danger"
            >
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
