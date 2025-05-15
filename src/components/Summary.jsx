import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Summary({ userAnswers, questions, totalQuestions }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => {
    answer === QUESTIONS[index].answers[0];
  });

  const skippedPercentage = Math.round(
    (skippedAnswers.length / totalQuestions) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / totalQuestions) * 100
  );
  const incorrectPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="Trophy icon" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let answerClass = "user-answer";
          if (answer === null) {
            answerClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            answerClass += " correct";
          } else {
            answerClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={answerClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
