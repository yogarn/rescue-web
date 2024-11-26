import './App.css';
import AboutSection from './sections/AboutSection';
import MockupSection from './sections/MockupSection';
import ProfileSection from './sections/ProfileSection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrototypeSection from './sections/PrototypeSection';

const theme = createTheme({
  palette: {
    purple: {
      main: '#484ED9',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap the entire app in ThemeProvider */}
      <div className="App">
        <ProfileSection />
        <AboutSection />
        <MockupSection />
        <PrototypeSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
