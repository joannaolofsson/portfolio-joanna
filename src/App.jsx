import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About';
import Resume from './pages/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Navbar/Menu';
import Toggle from './components/Navbar/Toggle';
import Footer from './components/Footer/Footer';
import Error from './pages/Error';
import BankID from './pages/BankID';
import Brand from './pages/Brand';
import CasePage from './pages/CasePage';
import BankIDLayout from './pages/BankIDLayout';
import Trash2treasure from './pages/Trash2Treasure';
import TrashLayout from './pages/TrashLayout';
import BrandLayout from './pages/BrandLayout';

const theme = {
  colors: {
    color: '#352f36',
    body: '#fff',
    footer: '#171716',
  },
  small: '768px',
  medium: '1024px',
}

function App() {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <ThemeProvider theme={theme}>
      <Toggle handleNavToggle={handleNavToggle} />
      <Navbar />
      {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/casePage" element={<CasePage />} />
        <Route path="/about" element={<About />} />


        <Route path="Trash2Treasure" element={<TrashLayout />} >
          <Route index element={<Trash2treasure />} />
        </Route>
        <Route path="BankID" element={<BankIDLayout />}>

          <Route index element={<BankID />} />
        </Route>
        <Route path="Brand" element={<BrandLayout />} >
        <Route index element={<Brand />}/>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
