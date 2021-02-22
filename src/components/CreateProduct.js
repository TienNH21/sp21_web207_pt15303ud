import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Products from './Products';
import axios from 'axios';

function CreateProduct({
  clicked,
  formData,
  setFormData,
  setProducts,
  products,
  setClicked,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onCreateProduct = () => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/';

    const method = 'POST';
    axios({
      url: url,
      method: method,
      data: formData,
    }).then((response) => {
        const { data } = response;
        setProducts([
          ...products,
          data,
        ]);
      }).catch((error) => {
        console.error(error.response);
      });
  }

  const onUpdateProduct = () => {
    const url = `https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/${ products[clicked].id }`;
    const method = 'PUT';

    axios({
      url: url,
      method: method,
      data: formData,
    }).then((response) => {
        const { data } = response;
        setProducts((oldState) => {
          let newState = oldState.map((value, index) => {
            return index == clicked ? data : value;
          });

          return newState;
        });
      }).catch((error) => {
        console.error(error.response);
      });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (clicked == -1) {
      // Tạo mới
      onCreateProduct();
    } else {
      // Cập nhật
      onUpdateProduct();
    }
  }

  const btnClearOnClick = () => {
    setClicked(-1);
    setFormData({
      id: '',
      name: '',
      price: '',
    });
  }

  return (
    <form
      onSubmit={ onSubmitHandler }
      style={{ marginTop: '10px' }}>
      <TextField
        label="Id"
        fullWidth
        value={ formData.id }
        name="id"
        onChange={ onChangeHandler }
        style={{ marginTop: '10px' }}
        variant="outlined" />
      <TextField
        label="Name"
        fullWidth
        value={ formData.name }
        name="name"
        onChange={ onChangeHandler }
        style={{ marginTop: '10px' }}
        variant="outlined" />
      <TextField
        label="Price"
        fullWidth
        value={ formData.price }
        name="price"
        onChange={ onChangeHandler }
        style={{ marginTop: '10px' }}
        variant="outlined" />
      <Button
        type="submit"
        variant="contained"
        color="primary">
        Submit
      </Button>
      <Button
        onClick={ btnClearOnClick }
        variant="contained"
        color="default">
          Clear
      </Button>
    </form>
  );
}

export default CreateProduct;
