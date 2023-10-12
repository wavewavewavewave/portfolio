import React from 'react';
import logo from '../../assets/logo.svg'
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <a>
                <img src={logo} alt={'logo'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  margin-top: 26px;
  margin-left: 149.71px;
`