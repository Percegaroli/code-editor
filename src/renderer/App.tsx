import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './core/theme/global';
import theme from './core/theme';
import Routes from './core/routes';
import { CodeTabContextProvider } from './modules/CodeEditor/context/TabContext';
import WindowHeader from './modules/CodeEditor/components/organisms/WindowHeader';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CodeTabContextProvider>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <WindowHeader />
            <Routes />
          </div>
        </CodeTabContextProvider>
      </ThemeProvider>
    </>
  );
}
