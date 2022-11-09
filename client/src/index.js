import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import AuthContextProvier from './context/AuthContext';
import ModalContextProvider from './context/ModalContext';
import CarsContextProvider from './context/CarsContext'
import CarContextProvider from './context/CarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvier>
      <ModalContextProvider>
        <CarsContextProvider>
          <CarContextProvider>
            <App />
          </CarContextProvider>
        </CarsContextProvider>
      </ModalContextProvider>
    </AuthContextProvier>
  </React.StrictMode>
);


