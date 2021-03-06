import styled, { css } from 'styled-components';

const sizes = {
    largeScreen: 769,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})


export const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.pageBackgroundColor || '#6ba2cc'};
    color: ${props => props.textColor || '#20253F'};
`;

export const PageHeader = styled.div`
    font-size: 2rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.headerBackgroundColor || '#9DADBC'};
`;

export const PageBody = styled.div`
  flex: 1;
  height: 90vh;
  overflow: hidden;
  padding: 0 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.column && `flex-direction: column;`}
`;

export const PageSubTitle = styled.div`
  font-size: 1.5rem;
  padding: 2vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFECCC;
`;

export const PlayerSpectatorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PlayerSpectatorSection = styled.div`
  padding: 0 2vw;
`

export const PageFooterContainer = styled.div`
    text-align: center;
    padding: 5vh 0;
`

export const Button = styled.button`
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 3vh;
    font-family: inherit;
    background-color: #ffe758;
    color: #ff9303;

    &:hover {
        color: white;
        background-color: #f95568;
    }
`;
