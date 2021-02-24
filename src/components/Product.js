import ListProducts from './ListProducts';
import CreateProduct from './CreateProduct';
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
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
  const [loading, setLoading] = useState(false);

  let url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';
  const [page, setPage] = useState(1);
  // const urlParams = new URLSearchParams(window.location.search);
  // let page = urlParams.get('page') != null ? urlParams.get('page') : 1;

  /*
   * Với search & filter: thêm params cho url. Tham khảo: https://mockapi.io/docs
   * urlParams.set('search', 'keyword')
   */

  useEffect(() => {
    const limit = 5;
    const phanTrangUrl = url + '?limit=' + limit + '&page=' + page;
    setLoading(true);
    axios({
      method: 'GET',
      url: phanTrangUrl,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    page,
    /*
     * Khi giá trị của các phần tử trong mảng thay đổi
     * useEffect() sẽ gọi lại hàm callback
     */
  ]);

  const trangTruoc = function () {
    console.log("Trang truoc");
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const trangSau = function () {
    console.log("Trang sau");
    setPage(page + 1);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Backdrop open={loading} style={{ zIndex: '1000' }}>
        <CircularProgress />
      </Backdrop>
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
          <ul className="pagination mt-4">
            <li
              onClick={ trangTruoc }
              className="page-item">
              <a className="page-link">Trang trước</a>
            </li>

            <li className="page-item">
              <a className="page-link">{ page }</a>
            </li>

            <li
              onClick={ trangSau }
              className="page-item">
              <a className="page-link">Trang sau</a>
            </li>
          </ul>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Product;
