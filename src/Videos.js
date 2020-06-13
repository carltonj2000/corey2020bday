import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "./Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    alignItems: "center",
    color: "#ff0",
    background: "rgba(85,26,139,1)",
  },
}));

function Videos(props) {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Old Video - New Coming Soon</Typography>
          <iframe
            width="480"
            height="315"
            title="Old Video - New Coming Soon"
            src="https://youtu.be/B1wHyGJKWa8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Paper>
      </div>
    </Layout>
  );
}

export default Videos;
