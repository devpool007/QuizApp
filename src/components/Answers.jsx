import { useRef } from "react";
export default function Answers({answers, selectedAnswer, answerSate, handleAnswerSelect}) {

    const shuffledAnswers = useRef(null);

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        // Shuffle the answers [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }

return ( <ul id="answers">
    {shuffledAnswers.current.map((answer) => {
      const isSelected = selectedAnswer === answer;
      let cssClass = "";

      if (answerSate === "answered" && isSelected) {
        cssClass = "selected";
      }

      if (
        (answerSate === "correct" || answerSate === "wrong") &&
        isSelected
      ) {
        cssClass = answerSate;
      }

      return (
        <li key={answer} className="answer">
          <button
            onClick={() => handleAnswerSelect(answer)}
            className={cssClass}
            disabled={answerSate !== "" && answerSate !== "answered"}
          >
            {answer}
          </button>
        </li>
      );
    })}
  </ul>);


}