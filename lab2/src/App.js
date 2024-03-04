import {Route, Routes} from 'react-router-dom';
import './App.css';
import Services from './Services';
import CustomerCare from './CustomerCare';
import Products from './Products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/customer-care' element={<CustomerCare/>}/>
    </Routes>
  );
}

export default App;
