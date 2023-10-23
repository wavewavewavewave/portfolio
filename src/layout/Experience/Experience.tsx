import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {ExperienceBar} from "../../components/ExperienceBar/ExperienceBar";
import {Wrapper} from "../../components/Wrapper/Wrapper";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>
                Experience
            </SectionTitle>
            <ExperienceBar year={1932}/>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #161D2A;
  color: white;
  padding-bottom: 140px;
`;
