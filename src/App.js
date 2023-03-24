// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Switch } from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import MovieListing from './MovieListing';
import MovieDetails from './MovieDetails';
import More from './More';
import BookingPage from './BookingPage';


function App() {
  return (
    // <Router>
    <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MovieListing />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/more' element={<More />} />
          <Route path='/movie/:id/booking' element={<BookingPage />} />
          
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
