import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './components/layout/AuthLayout';
import AppLayout from './components/layout/AppLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';
import { purple } from "@mui/material/colors"
import Home from './pages/Home';

function App() {
    const theme = createTheme({
      palette: { 
      // mode: 'dark'}, 
      primary: purple}, 
    });
    return (
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            </Route>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="memo" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  };
export default App;
