import './App.css';
import ProfileSection from './sections/ProfileSection';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      </div>
    </ThemeProvider>
  );
}

export default App;
