import React from 'react';

function VideoGame(props) {
  const { currentGame } = props;
  return (
    <section className='game'>
      <h1>{currentGame.name}</h1>
      <p>{currentGame.description}</p>
    </section>
  );
}
export default VideoGame;
