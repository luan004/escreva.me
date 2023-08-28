import '../css/Input.css';

export default function Box(props) {
    return (
        <form>
            <input className='Input' type='text' maxLength={props.maxLength} placeholder='Digite uma letra' />
        </form>
    );
}