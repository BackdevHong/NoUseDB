import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import EditPage from './pages/edit';

function App() {
  return (
    <Routes>
        <Route path='/' index element={<EditPage />}></Route>
        <Route path='/view' element={<View />}></Route>
    </Routes>
  );
}

export default App;
