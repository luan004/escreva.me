import '../css/Word.css';

export default function Button(props) {
    return (
        <div>
            <h1 className='Word'>{props.word}</h1>
        </div>
    );
}