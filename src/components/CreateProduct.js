import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Products from './Products';

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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setProducts((oldState) => {
      let newState;

      if (clicked != -1) {
        newState = oldState.map((value, index) => {
          return index == clicked ? formData : value;
        });
      } else {
        newState = [
          ...products,
          formData
        ];
      }

      return newState;
    });
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
