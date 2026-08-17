import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectDarkModeEnabled } from './features/theme/themeSlice';
import { lightMode, darkMode } from './themes';
import App from './App';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './styled';

const RootComponent = () => {
  const darkModeEnabled = useSelector(selectDarkModeEnabled);

  return (
    <ThemeProvider theme={darkModeEnabled ? darkMode : lightMode}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
};

export default RootComponent;
