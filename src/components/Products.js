import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
import axios from 'axios';

function Products({
  data,
  setClicked,
  setFormData,
  setProducts,
}) {
  const onClickHandler = (event, value, index) => {
    setClicked(index);
    setFormData(value);
  }

  const onDelete = (value, index) => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/' + value.id;

    return axios({
      method: 'delete',
      url: url,
    })
  }

  const btnDeleteOnClick = (event, value, index) => {
    const result = onDelete(value, index);

    result.then((response) => {
        setProducts((oldState) => {
          let newState = oldState.filter((value, idx) => {
            return idx == index ? false : true;
          });

          return newState;
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((value, index) => {
              return (
                <TableRow
                  onClick={
                    (event) => {
                      onClickHandler(event, value, index);
                    }
                  }
                  key={index}>
                  <TableCell>{ value.id }</TableCell>
                  <TableCell>{ value.name }</TableCell>
                  <TableCell>{ value.price }</TableCell>
                  <TableCell>
                    <Button
                      onClick={ (event) => btnDeleteOnClick(event, value, index) }
                      color="secondary">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default Products;
