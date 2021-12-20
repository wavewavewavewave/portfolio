import React from 'react';
import s from './Project.module.css';


function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.icon}></div>
            <h3>{props.projectName}</h3>
            <span>
                {props.discription}
            </span>
        </div>
    );
}

export default Project;