import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerSate, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerSate === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerSelect = useCallback(
    function handleAnswerSelect(selectedAnswer) {
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleAnswerSelect(null),
    [handleAnswerSelect]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleAnswerSelect}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
