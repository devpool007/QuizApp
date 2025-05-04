import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({questionText, answers, onSelectAnswer, handleSkipAnswer, selectedAnswer, answerSate}) {
    return (
        <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerSate={answerSate}
          handleAnswerSelect={onSelectAnswer}
        />
      </div>
    );
}