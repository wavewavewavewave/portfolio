import React from 'react';
import linkedIn from "../../assets/Linkedin.svg";
import gitHub from "../../assets/mark-github-24.svg";
import telegram from "../../assets/Vector.svg";
import styled from "styled-components";

export const  SocialMenu = () => {
    return (
        <StyledSocialMenu>
            <ul>
                <li>
                    <img src={gitHub} alt={'logo'}/>
                </li>
                <li>
                    <a href={'https://www.linkedin.com/in/mikita-shkrabau-b5806a21b/'} target={'_blank'}><img
                        src={linkedIn} alt={'logo'}/></a>
                </li>
                <li>
                    <img src={telegram} alt={'logo'}/>
                </li>
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
