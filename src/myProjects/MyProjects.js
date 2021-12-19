import React from 'react';
import s from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";


function MyProjects(props) {
    return (
        <div className={s.projectsBlock}>
            <div className={` ${styleContainer.container}  ${s.projectsContainer}  `}>
                <h3 className={s.title}>My Projects</h3>
                <div className={s.projects}>

                </div>
            </div>
        </div>
    );
}

export default MyProjects;