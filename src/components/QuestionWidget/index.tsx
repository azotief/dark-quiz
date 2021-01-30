import { useState } from 'react';

import Widget from '../Widget';
import Button from '../Button';

interface Question {
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
}

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}: QuestionWidgetProps) {
  const [selected, setSelected] = useState(null);

  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
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

        <form
          onSubmit={infosDoEvento => {
            infosDoEvento.preventDefault();
            setSelected(null);

            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                selected={selected}
                alternativeIndex={alternativeIndex}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onClick={() => setSelected(alternativeIndex)}
                  hidden
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={selected === null}>
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
