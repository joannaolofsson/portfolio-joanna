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
import Cookwise from './pages/Cookwise';
import Brand from './pages/Brand';
import Varamedvana from './pages/Varamedvana';

const theme = {
  colors: {
    color: '#352f36',
    header: '#fdf7dd',
    body: '#fff',
    footer: '#171716'
  },

  mobile: '768px',
}

function App() {
 
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }
  return (

    <ThemeProvider theme ={theme}>
      <Toggle handleNavToggle={handleNavToggle} />
    <Navbar />
    {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />}/>
        <Route path="/cookwise" element={<Cookwise/>}/>
        <Route path="/brand" element={<Brand/>}/>
        <Route path="/varamedvana" element={<Varamedvana/>}/>
        <Route path="*" element={<Error />}/>
     </Routes>
      <Footer />
  </ThemeProvider>
);
}
  
export default App;

