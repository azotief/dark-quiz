import Lottie from 'react-lottie';

import animationData from '../../animations/loading.json';

import Widget from '../Widget';

export default function LoadingWidget() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Widget>
        <Widget.Header>Carregando...</Widget.Header>

        <Widget.Content>
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
            isStopped={false}
            isPaused={false}
          />
        </Widget.Content>
      </Widget>
    </>
  );
}
