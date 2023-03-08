import './App.scss'
import Navbar from './components/Navbar/Navbar'
import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from'react-router-dom'
import Login from './components/login/Login'
import Registr from './components/Registr/Registr'



function App() {
  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registr />} />
        </Routes>

      </div>
  );
}

export default App;
