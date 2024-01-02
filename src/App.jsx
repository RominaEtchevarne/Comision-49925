
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:categoriaId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;