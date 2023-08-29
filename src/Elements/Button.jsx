import '../css/Button.css';

export default function Button(props) {
    return (
        <button
            className={`Button ${props.type} ${props.color}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}