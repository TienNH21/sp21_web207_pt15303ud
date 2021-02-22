import './App.css';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import React, { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const initValue = [];

  const formDataInitValue = {
    id: '',
    name: '',
    price: '',
  };

  const [products, setProducts] = useState(initValue);
  const [clicked, setClicked] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);

  let url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';

  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route path="/products/create">
          <CreateProduct
            products={ products }
            formData={ formData }
            setProducts={ setProducts }
            setFormData={ setFormData }
            setClicked={ setClicked }
            clicked={ clicked }/>
        </Route>
        <Route path="/products">
          <Products
            setFormData={ setFormData }
            setProducts={ setProducts }
            setClicked={ setClicked }
            data={ products } />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
