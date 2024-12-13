import style from './AppMain.module.css';
import ReadMoreBtn from './ReadMoreBtn';

function Article({ imageSrc, altText, content, buttonText, onClick }) {
    return (
        <section>
            <img src={imageSrc} alt={altText} className={style.image} />
            <p>{content}</p>
            <ReadMoreBtn text={buttonText} onClick={onClick} />
        </section>
    );
}

export default Article;