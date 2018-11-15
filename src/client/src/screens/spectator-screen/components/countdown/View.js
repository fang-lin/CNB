/* @flow */
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { PlayerSpectatorContainer, PlayerSpectatorSection, Button, PageFooterContainer, Page, PageHeader, PageBody } from '../../../styled';

const extremeFadeAndScale = keyframes`
    0% {
        opacity: 0;
        transform: scale(.5, .5);
    }
    60% {
        opacity: 1;
        transform: scale(1.3, 1.3);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const CountdownContainer = styled.div`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const CountdownItem = styled.h1`
  font-size: 10rem;
  position: absolute;
  opacity: 0
  animation: ${extremeFadeAndScale} 1s linear ${props => props.animationDelay}s 1 ${props=> props.animationDirection};
`;

const View = () => {
  const animationDelay = 0;

  return (
    <Page>
      <PageHeader>Result 结果</PageHeader>
      <PageBody column={ true }>
        <PlayerSpectatorContainer>
          <CountdownContainer>
            <CountdownItem animationDelay={animationDelay}>3</CountdownItem>
            <CountdownItem animationDelay={animationDelay + 1}>2</CountdownItem>
            <CountdownItem animationDelay={animationDelay + 2} animationDirection={'forwards'}>1</CountdownItem>
          </CountdownContainer>
        </PlayerSpectatorContainer>
      </PageBody>
    </Page>
  );
}

export default View;