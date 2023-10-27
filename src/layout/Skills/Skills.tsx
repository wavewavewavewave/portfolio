import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {AdditionalSkills} from "../../components/AdditionalSkills/AdditionalSkills";
import {skillsArray} from "../../utils/constants/Constants";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                Technologies
            </SectionTitle>
            <Wrapper justifyContent={'center'} align={'center'} direction={'column'}>
                {skillsArray.map((el) => (
                    <div style={{position: 'relative'}} key={el.id}>
                        <Progress value={el.value} max={el.max}/>
                        <TitleSkill>{el.title}</TitleSkill>
                    </div>
                ))}
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
  color: #FFF;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`