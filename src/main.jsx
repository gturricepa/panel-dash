import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  {theme} from '../src/theme/theme'; 
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
