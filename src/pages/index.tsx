import styled from 'styled-components';

import db from '../../db.json';

import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import SEO from '../components/SEO';
import Background from '../components/Background';
import { Widget } from '../components/Widget';

const Container = styled.div`
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
    <>
      <SEO title="Dark Quiz" image={db.bg} />
      <Background backgroundImage={db.bg}>
        <Container>
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
        </Container>
        <GitHubCorner projectUrl="https://github.com/azotief" />
      </Background>
    </>
  );
}
