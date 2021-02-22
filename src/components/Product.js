import ListProducts from './ListProducts';
import CreateProduct from './CreateProduct';
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

function Product() {
  let { path, url: routerUrl } = useRouteMatch();
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
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') != null ? urlParams.get('page') : 1;

  /*
   * Với search & filter: thêm params cho url. Tham khảo: https://mockapi.io/docs
   * urlParams.set('search', 'keyword')
   */

  useEffect(() => {
    const limit = 10;
    const phanTrangUrl = url + '?limit=' + limit + '&page=' + page;
    axios({
      method: 'GET',
      url: phanTrangUrl,
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
        <Route path={ path + "/create" }>
          <CreateProduct
            products={ products }
            formData={ formData }
            setProducts={ setProducts }
            setFormData={ setFormData }
            setClicked={ setClicked }
            clicked={ clicked }/>
        </Route>
        <Route path={ `${ path }` }>
          <ListProducts
            setFormData={ setFormData }
            setProducts={ setProducts }
            setClicked={ setClicked }
            data={ products } />
          <Pagination count={1} page={page} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Product;
