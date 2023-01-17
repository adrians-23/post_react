import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavbarComponent from './components/NavbarComponent';
import DataComponent from './components/DataComponent';
import { Container } from 'react-bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <NavbarComponent />
      <DataComponent />
    </Container>
  </React.StrictMode>
);