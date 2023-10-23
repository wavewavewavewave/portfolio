import React from 'react';
import styled from "styled-components";
import {WrapperType} from "../../types/types";


export const Wrapper = styled.div<WrapperType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;