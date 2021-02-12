import React, { useState, useEffect } from 'react';
import axios from '../../wrappers/axiosWrapper';
import { useParams } from 'react-router-dom';

import Product from './Product';

export default function ProductDetail(props) {
  const [ product, setProduct ] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const config = {
      url: `http://localhost:5000/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setProduct(response.data)
    }).catch((err) => {
      console.log('error in ProductDetail useEffect');
    })
  }, []);

  return <Product product={product} />
}