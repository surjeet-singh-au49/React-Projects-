
// All the components imports
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services';



// All the css styles imports 
import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquery.scss'// All media query file should be at last of all the imports.



// Routing for HomePage, Contact Page and Services Page.
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
