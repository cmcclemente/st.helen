import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FileUploader from './Upload/FileUploader';
import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(1),
  },
  dateRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

function UploadProduct() {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <form>
                <body>
                    <h1>Upload A Product to Sell</h1>
                    <FileUploader />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.formControl}
                        form="eventCreateForm"
                        >
                        Submit
                    </Button>
                    <div className="center">
                        <p>Description</p>
                        <p>price: </p>
                        <p>quality</p>
                    </div>
                </body>
            </form>
            <Footer />
        </div>
      );
}

export default UploadProduct