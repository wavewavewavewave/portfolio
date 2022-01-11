import React from 'react';
import s from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./projects/Project";


function MyProjects(props) {
    return (
        <div className={s.projectsBlock}>
            <div className={` ${styleContainer.container}  ${s.projectsContainer}  `}>
                <h3 className={s.title}>My Projects</h3>
                <div className={s.projects}>
                        <Project projectName={'Todolist'} discription={'213eqw da' +'Lorem ipsum dolor sit amet, consectetur elit,  ut adipisicing'}/>
                        <Project projectName={'Social Network'} discription={'sed do eiusmod tempor asdasdqwea asdqwe21 qsdzca qw3123'}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;