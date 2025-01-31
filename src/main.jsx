import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import MaintenancePage from './components/MaintenancePage/MaintenancePage';

const isMaintenanceMode = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {isMaintenanceMode ? <MaintenancePage/> : <App />}
  </StrictMode>
);

