import React from "react";
import { Grid } from "@material-ui/core";

import Event from "./Event";

export default function EventLists(props){
    return(
        <Grid container item direction="row" wrap="nowrap" spaceing={1}>
            {props.events.map((event) =>(
                <Grid key={event.id} item xs={2}>
                    <Event event={event}/>
                </Grid>
            ))}
        </Grid>
    );
}