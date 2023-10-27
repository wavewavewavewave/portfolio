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
  width: 100%;
  background-color: #161D2A;;
  color: white;
  padding-bottom: 140px;
`;