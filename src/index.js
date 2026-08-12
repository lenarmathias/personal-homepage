import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import { selectDarkModeEnabled } from './features/theme/themeSlice';
import { lightMode, darkMode } from './themes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './styled';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent = () => {
  const darkModeEnabled = useSelector(selectDarkModeEnabled);

  return (
    <React.StrictMode>
      <ThemeProvider
        theme={
          darkModeEnabled
            ? darkMode
            : lightMode
        }>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
};

root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

reportWebVitals();
