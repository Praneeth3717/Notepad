import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Super from './components/Super';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<Super/>}>
          <Route path="/home" element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
