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
                    {/*<span>24 years old</span>*/}
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
  width: 330px;
  height: 430px;
  object-fit: cover;
`