import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import Movies from './pages/movies';
import Favorites from './pages/favorites';
import Rentals from './pages/rentals';
import NoPage from './pages/nopage';
import Accounts from './pages/accounts'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter >
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Movies/>} path='/movies' />
          <Route element={<Favorites/>} path='/favorites' />
          <Route element={<Rentals/>} path='/rentals' />
          <Route element={<NoPage/>} path='*' />
          <Route element={<Accounts/>} path='/accounts/login'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
