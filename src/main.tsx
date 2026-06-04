import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import Example from './pages/Example.tsx'
import IOS26Demo from './pages/iOS26Demo'
import LoginDemo from './pages/LoginDemo'
import DashboardDemo from './pages/DashboardDemo'
import SettingsDemo from './pages/SettingsDemo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/example" element={<Example />} />
        <Route path="/ios26" element={<IOS26Demo />} />
        <Route path="/login" element={<LoginDemo />} />
        <Route path="/dashboard" element={<DashboardDemo />} />
        <Route path="/settings" element={<SettingsDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
