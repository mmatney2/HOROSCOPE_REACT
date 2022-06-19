import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import primaryTheme from './themes/primaryTheme';
import CustomThemeProvider from './context/ThemeContext';
import AppContextProvider from './context/AppContext';
import {BrowserRouter} from 'react-router-dom';
import Horoscopes from './views/Horoscopes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CustomThemeProvider> */}
    <BrowserRouter>
    <AppContextProvider>

    <ThemeProvider theme={primaryTheme}>

    <CssBaseline/>
    <App />       

    </ThemeProvider>

    </AppContextProvider>
    </BrowserRouter>
    {/* </CustomThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
