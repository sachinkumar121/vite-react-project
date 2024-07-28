import React from 'react'
import ReactDOM from 'react-dom/client'
import SalePage from './SalePage.jsx'
import './index.css'

function renderSalesPage(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <SalePage />
      </React.StrictMode>,
    )
  } else {
    console.error('Container element not found');
  }
}

// Expose the render function to the global scope
window.renderSalesPage = renderSalesPage;