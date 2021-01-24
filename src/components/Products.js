import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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

  const btnDeleteOnClick = (event, index) => {
    setProducts((oldState) => {
      let newState = oldState.filter((value, idx) => {
        return idx == index ? false : true;
      });

      return newState;
    });
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
                      onClick={ (event) => btnDeleteOnClick(event, index) }
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
