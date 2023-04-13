import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/header'
import Footer from './components/Footer/footer';
import Landing_page from './Landing_page/landing_page';
import About from './About/about';
import Service from './Services/Service';
import Tresure from './Treasura/tresure';
import Contact from './Contact_us/contact';
function App() {


  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing_page />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/tresure' element={<Tresure />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      < Footer />
    </HashRouter>
  );
}

export default App;
