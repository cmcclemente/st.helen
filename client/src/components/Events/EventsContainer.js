import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';

import EventList from  "./EventList";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    featuredTitle: {
        margin: theme.spacing(1),
    }
}));


