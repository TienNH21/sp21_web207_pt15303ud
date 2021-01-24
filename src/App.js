import './App.css';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  const initValue = [
    { id:1, name: 'IPhone 12', price: '26,999,999.00' },
    { id:2, name: 'IPhone 11', price: '14,999,999.00' },
    { id:3, name: 'Oppo', price: '5,999,999.00' },
  ];

  const formDataInitValue = {
    id: '',
    name: '',
    price: '',
  };

  const [products, setProducts] = useState(initValue);
  const [clicked, setClicked] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '100vh'
          }}>
            <CreateProduct
              products={ products }
              formData={ formData }
              setProducts={ setProducts }
              setFormData={ setFormData }
              setClicked={ setClicked }
              clicked={ clicked }/>
            <Products
              setFormData={ setFormData }
              setProducts={ setProducts }
              setClicked={ setClicked }
              data={ products } />
          </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
