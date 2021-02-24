import { useState, useEffect } from 'react';
import axios from 'axios';

function Category() {
  const [listDanhMuc, setListDanhMuc] = useState([]);
  const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories';

  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      const { data } = response;
      setListDanhMuc(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <ul>
        {
          listDanhMuc.map(function (value, index) {
            return (<li key={index}>{value.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default Category;
