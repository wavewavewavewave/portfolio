import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {AdditionalSkills} from "../../components/AdditionalSkills/AdditionalSkills";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                Technologies
            </SectionTitle>
            <Wrapper justifyContent={'center'} align={'center'} direction={'column'}>
                <Progress value={100} max={100}/>
                <span>HTML</span>
                <Progress value={100} max={100}/>
                <span>Css, Sass</span>
                <Progress value={100} max={100}/>
                <span>JavaScript</span>
                <Progress value={100} max={100}/>
                <span>React, NextJs</span>
                <Progress value={70} max={100}/>
                <span>Styled component</span>
                <Progress value={60} max={100}/>
                <span>React Native</span>
                <Progress value={50} max={100}/>
                <span>Node, NestJS</span>
                <Progress value={30} max={100}/>
                <span>TypeORM, SequalizeORM</span>
                <Progress value={80} max={100}/>
                <span>MeterialUI, TailwindCSS</span>
                <Progress value={70} max={100}/>
                <span>TypeScript</span>
                <Progress value={30} max={100}/>
                <span>Docker, Docker compose</span>
            </Wrapper>
                <AdditionalSkills/>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #0F1624;
  color: white;
`;

const Progress = styled.progress`
  width: 900px;
  height: 18px;
  margin-top: 106px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #162950;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 5px;
  }`;