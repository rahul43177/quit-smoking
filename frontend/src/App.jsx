import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App