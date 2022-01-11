import React from 'react';
import s from './Project.module.css';


function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.button}>
                <button>Watch</button>
            </div>
            <div  className={s.discription}>
                <h2>
                    {props.projectName}
                </h2>
                <div>
                    {props.discription}
                </div>
            </div>
        </div>
    );
}

export default Project;