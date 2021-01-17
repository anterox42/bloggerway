import styled from 'styled-components';

export const Button = styled('div')`
  font-family: Roboto, helvetica;
  color: white;
  background: orange;
  font-size: 1em;
  margin-top: 1em;
  padding: 1em 1em;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  max-width: 10rem;
  :hover {
    background-color: rgba(255, 165, 0, 0.8);
  }
`;
