import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={` ${styleContainer.container} ${s.skillsContainer} `}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'TypeScript'} discription={'213eqw da' +'Lorem ipsum dolor sit amet, consectetur elit,  ut adipisicing'}/>
                    <Skill title={'React'} discription={'sed do eiusmod tempor incididunt'}/>
                    <Skill title={'Js'} discription={'MASTER DEGREE KIEV UNIVERSITY'}/>
                    <Skill title={'Css'} discription={'I love Css'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;