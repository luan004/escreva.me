import '../css/Box.css';

export default function Box(props) {
    return (
        <div className="Box">
            {props.children}
        </div>
    );
}