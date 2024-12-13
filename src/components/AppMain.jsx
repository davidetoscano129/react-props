import style from './AppMain.module.css';
import Article from './Article';

function AppMain() {

    return (
        <main>
            <div className={style.container}>
                <Article
                    imageSrc="/images/toadstool.jpg"
                    altText="Toadstool Image"
                    content="In the silence of the forest, the toadstool stands as a symbol of balance between nature and mystery. With its unique appearance, it evokes the hidden beauty within the wonders of our world."
                    buttonText="Read More"
                />
            </div>
        </main>
    );
}

export default AppMain;