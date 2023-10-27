import React from 'react';
import styled from "styled-components";
import {headerMenuArray} from "../../utils/constants/Constants";
import {HeaderMenuType} from "../../types/types";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                {headerMenuArray.map((el: HeaderMenuType) => (
                    <li key={el.id}>
                        <a>{el.title}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 80px;
    margin-top: 37px;
    list-style: none;
    color: #FFFFFF;
    cursor: pointer;
  }
;
`