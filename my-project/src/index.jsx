import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
import '../src/css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
