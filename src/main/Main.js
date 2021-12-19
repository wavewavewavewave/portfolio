import React from 'react';
import s from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1>- I`m Nikita Shkrabov.</h1>
                    <span>Front-end Developer</span>
                </div>
                <div className={s.photo}>
            </div>
            </div>
        </div>
    );
}

export default Main;