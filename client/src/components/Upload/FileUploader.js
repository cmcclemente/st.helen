import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Typography,
  CircularProgress,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    TextField,
  makeStyles,
} from '@material-ui/core';
import UseFileUpload from './FileUpload';
import axios from 'axios';

const validationRules = yup.object({
  name: yup.string('Product Name').required('Product name required'),
  available: yup
    .string('Available')
    .oneOf(['true', 'false'], 'Must be a valid choice')
    .required('Available required'),
  description: yup.string('Description').required('Description required'),
  price: yup.string('Price').required('Price required'),
  areaCode: yup.string('Area Code').required('Area Code required')
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    flexGrow: 1,
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1),
    width: '100%',
  },
  imageUploader: {
    width: '10vw',
    margin: theme.spacing(1),
  },
    formControl: {
    margin: theme.spacing(1),
  },
}));

export default function FileUploader() {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
    const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      available: '',
      areaCode: '',
    },
    validationSchema: validationRules,
    onSubmit: (values) => {
      console.log('form values ', values);
      
      const requestConfig = {
        url: 'http://localhost:5000/api/v1/products',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          
        },
        data: {
          name: values.name,
          description: values.description,
          price: values.price,
          available: values.available,
          areaCode: values.areaCode,
        },
      };
        axios(requestConfig)
        .then(() => {
          setSuccess(true);
        })
        .catch((err) => {
          setError(err);
        });
    },
    });
    
  if (success) {
    return <Redirect to="/" />;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  const selectFile = (event) => {
    const { files } = event.target;
    setSelectedFile(files[0]);
  };

  const progressUpdater = (event) => {
    setUploadProgress(Math.round((100 * event.loaded)) / event.total);
  };

  const upload = () => {
    console.log('file to upload ', selectedFile);
    if (selectedFile) {
      UseFileUpload('featImage', selectedFile, progressUpdater)
        .then((response) => {
          console.log(response.data.message);
          setSelectedFile(null);
        })
        .catch((err) => {
          setError(err);
          setUploadProgress(0);
        });
    }
  };
    
  return (
    <div className={classes.root}>
      <h1>Upload A Product to Sell</h1>
      <form
        className={classes.root}
        onSubmit={formik.handleSubmit}
        id="productCreateForm"
      >
        <TextField
          required
          name="name"
          label="Product Name"
          value={formik.values.name}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        <TextField
          required
          name="description"
          label="Product Description"
          value={formik.values.description}
          multiline
          rows={4}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
        />
        <TextField
          required
          name="price"
          label="Price"
          value={formik.values.price}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
        />
        <TextField
          required
          name="areaCode"
          label="Area Code"
          value={formik.values.areaCode}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.areaCode && Boolean(formik.errors.areaCode)}
        />
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="available-label">Available</InputLabel>
          <Select
            labelId="available-label"
            name="available"
            label="Available"
            value={formik.values.available}
            onChange={formik.handleChange}
            error={formik.touched.available && Boolean(formik.errors.available)}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
      
      <div className={classes.imageSelector}>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={selectFile}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
          >
            
            Choose an image:
          </Button>
        </label>
        {selectedFile
          ? (
            <Typography>
              {selectedFile.name}
            </Typography>
          )
          : <div>Select a File</div>}
      </div>
     
        
      <CircularProgress variant="determinate" value={uploadProgress} />
      { error
        ? <div> Error Uploading File </div>
        : null}
         
        <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.formControl}
            form="productCreateForm"
        >
            Submit
        </Button>
    </form>
    </div>
  );
}