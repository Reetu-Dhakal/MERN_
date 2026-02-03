// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Component from './components/component';
import Greet from './components/greet';
import Homepage from './pages/home.page';
import NotfoundPage from './pages/notfound.page';
import RegisterPage from './pages/register.base';
import LoginPage from './pages/login.page';
import{BrowserRouter, Routes, Route} from 'react-router';
import {Toaster} from 'react-hot-toast'



function App() {
  // const [count, setCount] = useState(0)
  return(
    // <div>
    //   <h1>This is cooked</h1>
    //   <li>jsx stands for "javascript extended syntac for xml"</li>
    //   <li>props</li>
    //   { 2 + 2}
    //   {/* {Component()} */}
    //   <Component/>
    //   <Greet user = {'Ram'} name= {'abc'} />
    //   <Greet user = {'Ramji'}/>
    //   <Greet/>
    //   <Greet/>
    //   <li>component</li>
    // </div>
    <main className='h-screen min-w-full tracking-wider'>
      <Toaster position="top-right" />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/> 
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/register' element = {<RegisterPage/>}/> 
        <Route path='*' element={<NotfoundPage/>}/>
        <Route path='/product/:id'element={<div>product page</div>}/>  
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App

// { "", ""}
// xml
// user = {name : 'abc }
