import styled from 'styled-components';

export const WhiteButton = styled('div')`
  font-family: Roboto, helvetica;
  color: white;
  background: transparent;
  font-size: 1em;
  margin: 1em;
  padding: 0.3em 1em;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;