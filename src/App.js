import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landingPage';
import SignUp from './pages/registrationPage';
import LogIn from './pages/loginPage';
import Home from './pages/homePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
