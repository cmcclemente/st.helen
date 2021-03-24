import axios from '../Upload/AxiosWrapper';

export default function DeleteProduct(id) {
  
  const axiosConfig = {
    url: `api/v1/products/${id}`,
    method: 'delete',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
   
  };

  return axios(axiosConfig);
}