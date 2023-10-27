import React from 'react';
import styled from "styled-components";
import photo from '../../assets/msg526458758-336844.jpg'
import {Wrapper} from "../../components/Wrapper/Wrapper";
import draw from '../../assets/drawing.svg';

export const Main = () => {
    return (
        <StyledMain>
            <Wrapper align={'center'} justifyContent={'space-around'}>
                <div>
                    <MainTitle>I am Nikita Shkrabov</MainTitle>
                    <MainSubTitle>Front-end Engineer</MainSubTitle>
                </div>
                <StyledPhoto src={photo} alt={'photo'}/>
                <StyledDraw src={draw} alt={'draw'}/>
            </Wrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #0F1624;
  color: white;
`;

const StyledPhoto = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0px;
  border: 5px solid #8643DC;
  display: block;
  margin-top: 100px;
  z-index: 1
`;
const MainTitle = styled.h1`
  color: #FFF;

  font-family: Poppins;
  font-size: 54px;
  font-style: normal;
  font-weight: 600;
  line-height: normal
`;
const MainSubTitle = styled.h2`
  width: 482px;
  color: #BCBCBC;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const StyledDraw = styled.img`
  top: 300px;
  position: absolute;
  right: 0;
  z-index: 0;
  opacity: 0.5;
`;