import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WhiteButton } from './WhiteButton';

const HeaderContainer = styled('div')`
  top: 0;
  display: flex;

  justify-content: space-between;
  font-weight: bold;
  padding: 0.8rem;
  max-width: 1024px;
  margin: 0 auto;
`;

const Name = styled('div')`
  font-size: 2.3rem;
  cursor: pointer;
  font-family: Lobster, sans-serif;
  color: white;
`;

const Header = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
      <HeaderContainer>
        <Link href="/">
          <Name>
            <a>BloggerWay</a>
          </Name>
        </Link>

        <Link href="/posts/new">
          <WhiteButton>Post</WhiteButton>
        </Link>
      </HeaderContainer>
    </>
  );
};

export default Header;
