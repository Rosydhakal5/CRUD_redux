import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlisting from './components/Userlisting';
import Updateuser from './components/Updateuser';
import Adduser from './components/Adduser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/user' element = {<Userlisting></Userlisting>}></Route>
        <Route path='/user/add' element = {<Adduser></Adduser>}></Route>
        <Route path='/user/edit/:code' element = {<Updateuser></Updateuser>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer>
        </ToastContainer>  s
    </div>
  );
}

export default App;
