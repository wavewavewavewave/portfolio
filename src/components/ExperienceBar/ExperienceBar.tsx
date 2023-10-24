import React from 'react';
import styled from "styled-components";

export const ExperienceBar = () => {
    return (
        <>
            <ExperienceBarContainer>
                <ExperienceBarLine>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
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
  li:nth-of-type(1)::after {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, risus quis tempus ultrices, diam felis lacinia nulla, nec sodales purus quam vel sapien.";
    width: 200px;
    position: absolute;
    top: 30px;
    margin-left: -70px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #FFF;
  }
  li:nth-of-type(2)::after {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, risus quis tempus ultrices, diam felis lacinia nulla, nec sodales purus quam vel sapien.";
    width: 200px;
    position: absolute;
    top: 30px;
    margin-left: -70px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #FFF;
  }
  li:nth-of-type(3)::after {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, risus quis tempus ultrices, diam felis lacinia nulla, nec sodales purus quam vel sapien.";
    width: 200px;
    position: absolute;
    top: 30px;
    margin-left: -70px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #FFF;
  }
  li:nth-of-type(4)::after {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, risus quis tempus ultrices, diam felis lacinia nulla, nec sodales purus quam vel sapien.";
    width: 200px;
    position: absolute;
    top: 30px;
    margin-left: -70px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #FFF;
  }
  li:nth-of-type(1)::before {
    content: "2020";
    text-align: center;
    position: absolute;
    bottom: 20px;
    color: #FFF;
    margin-left: -14px;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  li:nth-of-type(2)::before {
    content: "2021";
    text-align: center;
    position: absolute;
    bottom: 20px;
    color: #FFF;
    margin-left: -14px;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  li:nth-of-type(3)::before {
    content: "2022";
    text-align: center;
    position: absolute;
    bottom: 20px;
    color: #FFF;
    margin-left: -14px;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  li:nth-of-type(4)::before {
    content: "2023";
    text-align: center;
    position: absolute;
    bottom: 20px;
    color: #FFF;
    margin-left: -14px;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;