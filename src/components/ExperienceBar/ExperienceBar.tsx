import React from 'react';
import styled from "styled-components";

export const ExperienceBar = ({year}: any) => {
    return (
        <ExperienceBarContainer>
            <ExperienceBarLine/>
            <ExperienceBarLine/>
            <ExperienceBarLine/>
            <ExperienceBarLine/>
            <ExperienceBarLine/>
            <ExperienceBarLabel>{year}</ExperienceBarLabel>
        </ExperienceBarContainer>
    );
};

const ExperienceBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ExperienceBarLine = styled.div`
  height: 4px;
  width: 880px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FFF;
  }
`;

const ExperienceBarLabel = styled.span`
  margin-left: 10px;
`;