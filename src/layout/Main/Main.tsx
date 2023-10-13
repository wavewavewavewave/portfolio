import React from 'react';
import styled from "styled-components";
import photo from '../../assets/msg526458758-336844.jpg'
import {Wrapper} from "../../components/Wrapper/Wrapper";

export const Main = () => {
    return (
        <StyledMain>
            <Wrapper align={'center'} justifyContent={'space-around'}>
                <div>
                    <h1>I am Nikita Shkrabov</h1>
                    <h2>Front-end Engineer</h2>
                </div>
                <StyledPhoto src={photo} alt={'photo'}/>
            </Wrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #0F1624;
  color: white;
`;

const StyledPhoto = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0px;
  border: 5px solid #8643DC;
`;
const MainTitle = styled.h1`
`;
const MainSubTitle = styled.h2`
`;