import { useState, useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';

import db from '../../db.json';

import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import SEO from '../components/SEO';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import Container from '../components/Container';
import Widget from '../components/Widget';

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      router.push(`/quiz?name=${name}`);
    },
    [name, router],
  );

  return (
    <>
      <SEO title={db.title} image={db.bg} />
      <Background backgroundImage={db.bg}>
        <Container>
          <Logo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>O começo é o fim, e o fim é o começo...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <form onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Digite o seu nome"
                  onChange={event => setName(event.target.value)}
                  value={name}
                  autoComplete="off"
                />

                <Button type="submit" disabled={!name}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Footer />
        </Container>
        <GitHubCorner projectUrl="https://github.com/azotief" />
      </Background>
    </>
  );
}
