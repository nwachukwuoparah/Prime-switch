import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/header'
import Landing_page from './Landing_page/landing_page';
function App() {

  
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing_page/>} />
        {/* <Route />
        <Route />
        <Route />
        <Route /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
