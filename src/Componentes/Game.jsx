import Box from '../Elements/Box.jsx';
import Word from '../Elements/Word.jsx';
import Input from '../Elements/Input.jsx';

export default function Home() {
  return (
    <Box
      children={
        <>
            <Word word='_ _ _ _' />
            <Input maxLength='4' />
        </>
      }
    />
  );
}