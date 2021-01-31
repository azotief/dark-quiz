import { useState, useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import db from '../../db.json';
import animationData from '../animations/empty.json';

import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import SEO from '../components/SEO';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import Container from '../components/Container';
import Widget from '../components/Widget';
import Link from '../components/Link';

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      router.push(`/quiz/my?name=${name}`);
    },
    [name, router],
  );

  return (
    <>
      <SEO title={db.title} image={db.bg} />
      <Background backgroundImage={db.bg}>
        <Container>
          <Logo />
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
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
          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Outros quizes</h1>
            </Widget.Header>
            <Widget.Content>
              <ul>
                {db.external.length ? (
                  db.external.map(linkExterno => {
                    const [projectName, githubUser] = linkExterno
                      .replace(/\//g, '')
                      .replace('https:', '')
                      .replace('.vercel.app', '')
                      .split('.');

                    return (
                      <li key={linkExterno}>
                        <Widget.Topic
                          as={Link}
                          href={`/quiz/${projectName}___${githubUser}`}
                          data-disabled={!name}
                        >
                          {`${githubUser}/${projectName}`}
                        </Widget.Topic>
                      </li>
                    );
                  })
                ) : (
                  <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                    isStopped={false}
                    isPaused={false}
                  />
                )}
              </ul>
            </Widget.Content>
          </Widget>

          <Footer
            as={motion.footer}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          />
        </Container>
        <GitHubCorner projectUrl="https://github.com/azotief" />
      </Background>
    </>
  );
}
