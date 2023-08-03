import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouterBlog from './RouterBlog';
//springboot_react_blog_9


//BrowserRouter => http://localhost:3000/
//HashRouter => http://localhost:3000/#/
import { BrowserRouter,HashRouter } from 'react-router-dom';

//dil seçeneği için  ekledim
import './internationalization/i18language';

//ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));

//RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterBlog />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
