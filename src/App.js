import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import ApplicationPage from './pages/ApplicationPage/ApplicationPage';
import Signup from './pages/Signup/Signup';
import AboutUs from './components/AboutUs/AboutUs';
import Sample from "../src/pages/Sample/Sample";
import Verification from './pages/Signup/Verification';
import Success from './pages/Signup/Success';
import Profile from './pages/Profile/Profile';
import ApplyWith from './pages/Profile/ApplyWith/ApplyWith';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyApplication from './pages/Profile/MyApplication/MyApplication';
import { HashLink } from 'react-router-hash-link';
import OurServices from './components/OurServices/OurServices';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
        <Route 
            path='/' 
            element={
              <>
                <HomePage />
              </>
            } 
          />
          <Route 
            path='/about' 
            element={
              <>
                <HomePage />
              </>
            } 
          />
           <Route 
            path='/services' 
            element={
              <>
                <HomePage />
              </>
            } 
          />
           <Route 
            path='/contactus' 
            element={
              <>
                <HomePage />
              </>
            } 
          />

          <Route path='/Sample' element={<Sample />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/ApplyWith' element={<ApplyWith />} />
          <Route path='/MyApplication' element={<MyApplication />} />
          <Route path='/applicationpage' element={<ApplicationPage />} />
        </Routes>
        <Footer />
      </Router>
      <div className="App">
      </div>
    </>
  );
}

export default App;
