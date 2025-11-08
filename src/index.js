import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import Header from './components/Header.tsx'
import Advantages from "./components/Advantages.tsx"
import Contact from './components/Contact.tsx'
import Basement from './components/Basement.tsx'
import Products from './components/Products.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div> <Header /> <App /> <Advantages /> <Products /> <Contact /> <Basement/> </div>);
