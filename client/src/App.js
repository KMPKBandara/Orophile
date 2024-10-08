import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import React from 'react';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
      </Route>
    </Routes>  
    
  );
}

export default App;
