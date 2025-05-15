import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
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
      <Summary
        userAnswers={userAnswers}
        questions={QUESTIONS}
        totalQuestions={QUESTIONS.length}
      />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleAnswerSelect}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
