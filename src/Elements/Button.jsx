import '../css/Button.css';

export default function Button(props) {
    return (
        <button className='Button' onClick={props.onClick}>
            {props.label}
        </button>
    );
}