import { useMemo } from 'react';
import { useRouter } from 'next/router';

import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';

export default function ResultWidget({ results }) {
  const router = useRouter();
  const playerName = router.query.name;

  const numberOfCorrectAnswers = useMemo(() => {
    return results.filter(x => x).length;
  }, [results]);

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
      </Widget.Header>

      <Widget.Content>
        <p>{`Parabéns ${playerName}, você finalizou o quiz!`}</p>
        <p>{`No total, você acertou ${numberOfCorrectAnswers} perguntas`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`# ${index + 1} Resultado: `}
              {`${result ? 'Correto!!' : 'Errado :('}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
