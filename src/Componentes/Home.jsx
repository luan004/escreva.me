import Box from '../Elements/Box.jsx';
import Button from '../Elements/Button.jsx';
import Game from './Game.jsx';
import Tutorial from './Tutorial.jsx';
import Sobre from './Sobre.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Home() {
  return (
    <Box
      children={
        <>
            <Button label='Iniciar' onClick={
                () => {
                    const root = ReactDOM.createRoot(document.getElementById('appHeader'));
                    root.render(
                        <React.StrictMode>
                            <Game />
                        </React.StrictMode>
                    );
                }
            }/>
          <Button label="Tutorial" />
          <Button label='Sobre' onClick={
              () => {
                  const root = ReactDOM.createRoot(document.getElementById('appHeader'));
                  root.render(
                      <React.StrictMode>
                          <Sobre />
                      </React.StrictMode>
                  );
              }
          } />
        </>
      }
    />
  );
}