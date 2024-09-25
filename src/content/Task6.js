import Timer from "../components/Timer";

function Task6() {
  return (
    <div id="mainContent">
      <div className="row1">
        <p className="instruction">
          A close cousin who lives in another country is coming to visit for a
          year. She tells you that she would like to stay at your place to
          explore your country’s culture and to spend some time with you. Your
          roommate does not agree, and says you will have to move out if she
          comes.
          <br />
          <br />
        </p>
        <div className="index-main-task">
          Choose ONE:
          <br />
          EITHER
          <br />
          <strong>
            Talk to your cousin. Explain why she cannot move in for a year.
          </strong>
          <br />
          OR
          <br />
          <strong>
            Talk to your roommate. Explain why your cousin should be allowed to
            move in with you for a year.
          </strong>
        </div>
        <p></p>
        <br />
        <hr />
        <Timer/>
        <br />
        <div id="recordingNote">
          <strong>*NOTE:</strong> This sample test is not recording your
          response.
        </div>
      </div>
    </div>
  );
}

export default Task6;
