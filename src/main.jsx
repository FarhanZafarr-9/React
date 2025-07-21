import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './frontend/utils/ThemeContext.jsx'
import { DataProvider } from './frontend/utils/DataContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
//git push -u origin main
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </ThemeProvider>
  </StrictMode>,
)
