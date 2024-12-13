import style from "./AppHeader.module.css";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className="container">
                <h1 className={style.title}>Don't disturb the Toadstool</h1>
            </div>
        </header>
    );
}

export default AppHeader;