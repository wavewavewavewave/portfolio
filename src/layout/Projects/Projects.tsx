import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {projectsArray} from "../../utils/constants/Constants";

type ProjectsArrayType = {
    id: number;
    title: string;
    descriptions: string;
    image: string;
}

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>
                Projects
            </SectionTitle>
            <Wrapper align={'center'} justifyContent={'space-around'} wrap={'wrap'}>
                {projectsArray.map((el: ProjectsArrayType) => (
                    <div>
                        <StyledProjectBlock key={el.id}>
                            <StyledScreenProject src={el.image}/>
                            <ProjectTitle>{el.title}</ProjectTitle>
                            <StyledUnderline/>
                            <ProjectSubTitle>
                                {el.descriptions}
                            </ProjectSubTitle>
                            <StyledButton>Look it up</StyledButton>
                        </StyledProjectBlock>
                    </div>
                ))}
            </Wrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.div`
  min-height: 100vh;
  background-color: #0F1624;
  color: white;
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
const StyledScreenProject = styled.img`
  width: 500px;
  height: 280px;
  object-fit: cover;
  padding-top: 25px;
  border-radius: 24px 8px 8px 8px;
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
const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 83px;
  margin-top: 40px;
  margin-right: 325px;
  color: #FFF;

  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`;
const StyledUnderline = styled.div`
  width: 300px;
  margin-top: 23px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 83px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`;
// const Progress = styled.progress`
//   width: 100%;
//   height: 10px;
//   appearance: none;
//
//   &::-webkit-progress-bar {
//     background-color: #162950;
//     border-radius: 5px;
//   }
//
//   &::-webkit-progress-value {
//     background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
//     border-radius: 5px;
//   }`;