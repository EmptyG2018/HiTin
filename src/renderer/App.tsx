import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MusicLayout from './layouts';
import Login from './pages/Login';
import Home from './pages/Home';
import Role from './pages/Role';

const Layout = () => {
  return (
    <MusicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MusicLayout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<Role />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
