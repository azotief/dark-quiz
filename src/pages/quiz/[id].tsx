import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../../db.json';

import QuizScreen from '../../screens/quiz';

interface QuizPageProps {
  dbData: any;
}

export default function QuizPage({ dbData }: QuizPageProps) {
  return (
    <ThemeProvider theme={dbData.theme}>
      <QuizScreen questions={dbData.questions} background={dbData.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  if (id === 'my') {
    return {
      props: {
        dbData: db,
      },
    };
  }

  const [projectName, githubUser] = id.split('___');

  try {
    const externalDb = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`,
    )
      .then(respostaDoServer => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then(respostaConvertidaEmObjeto => respostaConvertidaEmObjeto);

    return {
      props: {
        dbData: externalDb,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
