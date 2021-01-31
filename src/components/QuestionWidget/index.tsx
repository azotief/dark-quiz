import { useState } from 'react';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';
import AlternativeWidget from '../AlternativeWidget';

import { AnswerContainer, CorrectAnswer, WrongAnswer } from './styles';

export interface Question {
  image: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface QuestionWidgetProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: Function;
  addResult: Function;
}

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}: QuestionWidgetProps) {
  const [selected, setSelected] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const questionId = `question__${questionIndex}`;
  const isCorrect = selected === question.answer;
  const hasAlternativeSelected = selected !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        {isQuestionSubmited && isCorrect && (
          <AnswerContainer data-is-correct={isCorrect}>
            <CorrectAnswer>Mandou bem, você acertou!!</CorrectAnswer>
          </AnswerContainer>
        )}
        {isQuestionSubmited && !isCorrect && (
          <AnswerContainer data-is-correct={isCorrect}>
            <WrongAnswer>Oops, você errou :(</WrongAnswer>
          </AnswerContainer>
        )}

        <AlternativesForm
          onSubmit={event => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelected(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selected === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <AlternativeWidget
                  alternativeId={alternativeId}
                  questionId={questionId}
                  isQuestionSubmited={isQuestionSubmited}
                  setSelected={setSelected}
                  alternativeIndex={alternativeIndex}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
