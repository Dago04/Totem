import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { TotemApp } from './TotemApp'
import './index.css'
import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TotemApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
