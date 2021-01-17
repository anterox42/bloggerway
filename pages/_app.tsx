import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useStore } from '../store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    color: grey;
  }

  header {
    position: relative;
    height: 120px;
    background-image: linear-gradient(#fa709a, #fee140);
  }
  
  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    /* set height to pixels if you want angle to change with screen width */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
