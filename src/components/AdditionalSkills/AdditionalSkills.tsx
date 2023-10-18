import React from 'react';
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Wrapper} from "../Wrapper/Wrapper";
import GitIcon from '../../assets/skill-icons_git.svg';
import FigmaIcon from '../../assets/skill-icons_figma-light.svg';
import GitHubIcon from '../../assets/Vector2.svg';

export const AdditionalSkills = () => {
    return (
        <>
            <Wrapper justifyContent={'center'} align={'center'}>
                <SectionTitle>
                    Additional technologies and skills
                </SectionTitle>
            </Wrapper>
            <Wrapper justifyContent={'center'} align={'center'} style={{padding: '70px', gap: '50px'}}>
                <img src={GitIcon}/>
                <img src={FigmaIcon}/>
                <img src={GitHubIcon}/>
            </Wrapper>
        </>
    );
};