import './App.css'
import Navbar from './components/navbar/Navbar'
import { ItemListcontainer } from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
        <Navbar/>
        <ItemListcontainer greeting ='Bienvenidos a mi app' />
    </div>
  );
}

export default App;
