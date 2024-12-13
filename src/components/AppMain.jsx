import style from './AppMain.module.css';

function AppMain() {

    return (
        <main>
            <div className={style.container}>
                <section>
                    <img
                        src="/images/toadstool.jpg"
                        alt="Toadstool Image"
                        className={style.image}
                    />
                    <p>
                        In the silence of the forest, the toadstool stands as a symbol of balance between nature and mystery. With its unique appearance, it evokes the hidden beauty within the wonders of our world.
                    </p>
                    <button className={style.button}>Read More</button>
                </section>
            </div>
        </main>
    );
}

export default AppMain;