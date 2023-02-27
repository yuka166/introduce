import "./title.css"

function Title({ chilren }) {
    return (
        <div>
            <div className='title'>{chilren}</div>
            <div className='title-border'></div>
        </div>
    );
}

export default Title;