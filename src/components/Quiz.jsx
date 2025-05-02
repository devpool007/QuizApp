import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleAnswerSelect(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer]; 
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // Shuffle the answers [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={() => handleAnswerSelect(null)}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {
            QUESTIONS[activeQuestionIndex].answers.map(answer => (
            <li key={answer} className="answer"> 
            <button onClick={() => handleAnswerSelect(answer)}>{answer}</button>
            </li>
            )
        )
        }
      </ul>
    </div>
    </div>
  );
}
