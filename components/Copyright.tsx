import React from 'react';
import styled from 'styled-components';

const CopyrightText = styled('div')`
  font-size: 12px;
  color: grey;
  text-align: center;
  margin: 2em;
`;

const Copyright = () => {
  return (
    <CopyrightText>
      {'Copyright © '}
      BloggerWay {new Date().getFullYear()}
    </CopyrightText>
  );
};

export default Copyright;
