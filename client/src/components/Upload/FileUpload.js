import axios from './AxiosWrapper';

export default function UseFileUpload(key, file, uploadProgressHandler) {
  const formData = new FormData();
  formData.append(key, file);
  const axiosConfig = {
    url: 'api/v1/uploads',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    onUploadProgress: uploadProgressHandler,
  };

  return axios(axiosConfig);
}