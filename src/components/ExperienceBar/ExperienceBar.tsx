import React from 'react';
import styled from "styled-components";

export const ExperienceBar = ({year}: any) => {
    return (
        <>
            <ExperienceBarContainer>
                <ExperienceBarLine>
                    <ul>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>
                </ExperienceBarLine>
            </ExperienceBarContainer>
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
  width: 880px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 25px;
    height: 25px;
    margin-top: -10px;
    border-radius: 83px;
    background-color: #FFF;
    display: inline-block;
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