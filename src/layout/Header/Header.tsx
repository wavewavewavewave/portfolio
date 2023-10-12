import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {SocialMenu} from "../../components/Social/SocialMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <SocialMenu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #0F1624;
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: space-between;
`
