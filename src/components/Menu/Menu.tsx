import React from 'react';
import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Technologies</a>
                </li>
                <li>
                    <a>About me</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    color: #FFFFFF;
    cursor: pointer;
  }
;
`