import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar.jsx';

// const Home = () => <div></div>;
// const About = () => <div></div>;
// const Contact = () => <div></div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// const nav = ReactDOM.createRoot(document.getElementById('nav'));
// nav.render(
//   <React.StrictMode>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// )
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
