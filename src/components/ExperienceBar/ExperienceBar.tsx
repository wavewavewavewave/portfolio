import React from 'react';
import styled from "styled-components";

export const ExperienceBar = ({year}: any) => {
    return (
        <>
            <ExperienceBarContainer>
                <ExperienceBarLine />
                {/*<ExperienceBarLabel>{year}</ExperienceBarLabel>*/}
            </ExperienceBarContainer>
            <br />
        </>
    );
};

const ExperienceBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
const ExperienceBarLine = styled.div`
  height: 4px;
  width: 600px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 83px;
    background-color: #FFF;
  }
  ::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 25%;
    width: 25px;
    height: 25px;
    border-radius: 83px;
    background-color: #FFF;
  }
  :nth-child(2)::after {
    content: ".";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 25px;
    height: 25px;
    border-radius: 83px;
    background-color: #FFF;
  }
  :nth-child(3)::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 75%;
    width: 25px;
    height: 25px;
    border-radius: 83px;
    background-color: #FFF;
  }
`;

const ExperienceBarLabel = styled.span`
  width: 260px;
  color: #FFF;

  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;