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
                <div style={{position: 'relative'}}>
                    <Progress value={100} max={100}/>
                    <TitleSkill>HTML</TitleSkill>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={100} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>Css, Sass</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={100} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>JavaScript</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={100} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>React, NextJs</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={70} max={100}/>
                    <span
                        style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>Styled component</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={60} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>React Native</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={50} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>Node, NestJS</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={30} max={100}/>
                    <span style={{
                        position: 'absolute',
                        top: 0,
                        left: '10px',
                        marginTop: '80px'
                    }}>TypeORM, SequalizeORM</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={80} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>MeterialUI, TailwindCSS</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={70} max={100}/>
                    <span style={{position: 'absolute', top: 0, left: '10px', marginTop: '80px'}}>TypeScript</span>
                </div>
                <div style={{position: 'relative'}}>
                    <Progress value={30} max={100}/>
                    <span style={{
                        position: 'absolute',
                        top: 0,
                        left: '10px',
                        marginTop: '80px'
                    }}>Docker, Docker compose</span>
                </div>
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
const TitleSkill = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  margin-top: 80px;
`