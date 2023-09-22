import { Container } from 'react-bootstrap';
import './App.css';
import Gnb from './component/Gnb';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import { useEffect, useState } from 'react';
import ProductDetail from './page/ProductDetail';

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  useEffect(()=> {
    console.log(authenticate);
  },[authenticate])
  return (
    <Container className='body'>
      <Gnb authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
            <Route path='/' element={<ProductAll />}/>
            <Route path='/product/:id' element={<ProductDetail authenticate={authenticate}/>} />
          </Routes>
        <Footer />
    </Container>
  );
}

export default App;
