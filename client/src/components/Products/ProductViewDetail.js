import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ProductView from './Product';

export default function ProductViewDetail(props) {
    const { id } = useParams();
    const [ product, setProductView ] = useState(null);
    console.log('k'+id);
  useEffect(() => {
    const config = {
      url: `http://localhost:5000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setProductView(response.data)
    }).catch((err) => {
      console.log('error in ProductViewDetail useEffect');
    })
  }, [id]);

    if (product) {
      return <ProductView product={product} />;
    }
    return <div>Loading...</div>;
}