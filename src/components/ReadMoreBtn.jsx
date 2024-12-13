import style from './AppMain.module.css';

function ReadMoreBtn({ text, onClick }) {
    return (
        <button className={style.button} onClick={onClick}>
            {text}
        </button>
    );
}

export default ReadMoreBtn;