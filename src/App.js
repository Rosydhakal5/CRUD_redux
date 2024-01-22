import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Userlisting from './components/Userlisting';
import Updateuser from './components/Updateuser';
import Adduser from './components/Adduser';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to = {'/'}>  Home </Link>
        <Link to = {'/user'}>User</Link>
      </div>

      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/user' element = {<Userlisting></Userlisting>}></Route>
        <Route path='/user/add' element = {<Adduser></Adduser>}></Route>
        <Route path='/user/edit/:code' element = {<Updateuser></Updateuser>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer>
        </ToastContainer> 
    </div>
  );
}

export default App;
