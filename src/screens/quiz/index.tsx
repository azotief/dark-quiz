import { useEffect, useState } from 'react';

import Logo from '../../components/Logo';
import Background from '../../components/Background';
import Container from '../../components/Container';
import LoadingWidget from '../../components/LoadingWidget';
import QuestionWidget, { Question } from '../../components/QuestionWidget';
import ResultWidget from '../../components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

interface QuizProps {
  questions: Question[];
  background: string;
}

export default function Quiz({ questions, background }: QuizProps) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);

  const totalQuestions = questions.length;
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function addResult(result) {
    setResults([...results, result]);
  }

  return (
    <Background backgroundImage={background}>
      <Container>
        <Logo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </Container>
    </Background>
  );
}
