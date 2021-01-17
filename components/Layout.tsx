import React, { ReactNode } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import Header from './Header';
import Copyright from './Copyright';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Container = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
  font-family: Roboto, helvetica;
  font-size: 16px;
  padding: 0.5rem;
`;

const Layout = ({ children, title = 'Blogs' }: Props) => (
  <>
    <header>
      <Header />
    </header>
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {children}
      <footer>
        <Copyright />
      </footer>
    </Container>
  </>
);

export default Layout;
