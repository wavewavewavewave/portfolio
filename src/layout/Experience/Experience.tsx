import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {ExperienceBar} from "../../components/ExperienceBar/ExperienceBar";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>
                Experience
            </SectionTitle>
            <ExperienceBar/>
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
