import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {projectsArray} from "../../utils/constants/Constants";
import {Project} from "../../components/Project/Project";
import {ProjectsArrayType} from "../../types/types";



export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>
                Projects
            </SectionTitle>
            <Wrapper align={'center'} justifyContent={'space-around'} wrap={'wrap'}>
                {projectsArray.map((el: ProjectsArrayType) => (
                    <div>
                        <Project id={el.id} title={el.title} descriptions={el.descriptions} image={el.image} url={el?.url}/>
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