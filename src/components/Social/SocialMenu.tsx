import React from 'react';
import linkedIn from "../../assets/Linkedin.svg";
import gitHub from "../../assets/mark-github-24.svg";
import telegram from "../../assets/Vector.svg";
import styled from "styled-components";
import {socialMenuArray} from "../../utils/constants/Constants";
import {SocialMenuType} from "../../types/types";

export const SocialMenu = () => {
    return (
        <StyledSocialMenu>
            <ul>
                {socialMenuArray.map((el: SocialMenuType) => (
                    <li key={el.id}>
                        <a href={el?.href} target={'_blank'}>
                            <img src={el.image} alt={'logo'}/>
                        </a>
                    </li>
                ))}
            </ul>
        </StyledSocialMenu>
    );
};

const StyledSocialMenu = styled.nav`
  ul {
    display: flex;
    cursor: pointer;
    list-style: none;
    margin-top: 34px;
    margin-right: 151px;
    gap: 25px;
  }
`
