import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarWidget from './component/NavBarWidget';
import NoPage from './pages/NoPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import DonationPage from './pages/DonationPage';
import EventPage from './pages/EventPage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarWidget/>}>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/contact' element={ <HomePage/>}/>
        <Route path='/about' element={ <AboutPage/>}/>
        <Route path='/contact' element={ <ContactPage/>}/>
        <Route path='/Donation' element={ <DonationPage/>}/>
        <Route path='/event' element={ <EventPage/>}/>
        <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
       
      </BrowserRouter>
  );
}

export default App;
