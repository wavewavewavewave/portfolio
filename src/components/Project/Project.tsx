import React from 'react';
import styled from "styled-components";
import {ProjectsArrayType} from "../../types/types";

export const Project = (props: ProjectsArrayType) => {
    return (
        <StyledProjectBlock key={props.id}>
            <StyledScreenProject src={props.image}/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <StyledUnderline/>
            <ProjectSubTitle>
                {props.descriptions}
            </ProjectSubTitle>
            <StyledButton>
                <a href={props?.url}
                   target={'_blank'}>Look it up</a>
            </StyledButton>
        </StyledProjectBlock>
    );
};
const StyledUnderline = styled.div`
  width: 300px;
  margin-top: 23px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 83px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`;
const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 83px;
  margin-top: 40px;
  margin-right: 325px;
  color: #FFF;
  cursor: pointer;

  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`;
const ProjectSubTitle = styled.div`
  width: 500px;
  color: #FFF;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 67px;
`;
const ProjectTitle = styled.div`
  color: #FFF;

  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 88.5%;
  padding-top: 40px;
`;
const StyledScreenProject = styled.img`
  width: 500px;
  height: 280px;
  object-fit: cover;
  padding-top: 25px;
  border-radius: 24px 8px 8px 8px;
`;
const StyledProjectBlock = styled.div`
  width: 550px;
  min-height: 650px;
  border-radius: 50px 0px;
  border: 1px solid #A39D9D;
  background: #0F1624;
  display: flex;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
`;
