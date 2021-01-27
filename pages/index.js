import styled from "styled-components";

import db from "../db.json";

import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import { QuizBackground } from "../src/components/QuizBackground";
import { Widget } from "../src/components/Widget";

const QuizContainer = styled.aside`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Dark</h1>
          </Widget.Header>
          <Widget.Content>
            <p>O começo é o fim, e o fim é o começo...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Tudo está conectado...</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/azotief" />
      </QuizContainer>
    </QuizBackground>
  );
}
