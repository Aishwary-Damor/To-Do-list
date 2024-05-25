import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar.jsx';

// const Home = () => <div></div>;
// const About = () => <div></div>;
// const Contact = () => <div></div>;

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
      <TodoWrapper/>
    </div>
  );
}

export default App;