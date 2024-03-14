import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import { ItemListcontainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListcontainer greeting ='Bienvenidos a mi app' />}/>
          <Route path='/category/:categoryId' element={<ItemListcontainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h2>404: No existe</h2>}/>
        </Routes>
        
        
    </BrowserRouter>
  );
}

export default App;
