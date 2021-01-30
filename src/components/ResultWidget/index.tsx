import { useMemo } from 'react';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  const numberOfCorrectAnswers = useMemo(() => {
    return results.filter(x => x).length;
  }, [results]);

  return (
    <Widget>
      <Widget.Header>Tela de Resultado:</Widget.Header>

      <Widget.Content>
        <p>{`Você acertou ${numberOfCorrectAnswers} perguntas`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`# ${index + 1} Resultado: ${
                result ? 'Correto!!' : 'Errado :('
              }`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
