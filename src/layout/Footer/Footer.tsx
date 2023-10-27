import React from 'react';
import styled from "styled-components";
import {SocialMenu} from "../../components/Social/SocialMenu";

export const Footer = () => {
    return (
        <StyledFooterBlock>
            <StyledTitleBlock>
                <span style={{marginRight: '90px'}}>Call me:</span>
                <StyledTextBlock style={{display: "block"}}>+375-29-832-39-39</StyledTextBlock>
            </StyledTitleBlock>
            <StyledTitleBlock>
                <span style={{marginRight: '140px'}}>Email: </span>
                <StyledTextBlock
                    style={{display: "block", marginLeft: '50px'}}>nikitashkrabov@gmail.com</StyledTextBlock>
            </StyledTitleBlock>
            <div style={{paddingLeft: '400px'}}>
                <SocialMenu/>
            </div>
        </StyledFooterBlock>
    );
};

const StyledFooterBlock = styled.footer`
  background-color: #0F1624;
  display: flex;
  width: 100vw;
  min-height: 150px;
  color: #FFF;
  justify-content: space-evenly;
`;
const StyledTitleBlock = styled.div`
  color: #FFF;
  padding-top: 43px;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  white-space: pre-wrap;
  line-height: normal;
`
const StyledTextBlock = styled.span`
          color: #FFF;
          text-align: center;
          margin-top: 10px;
          font-family: Poppins;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
    `
;