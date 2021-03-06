import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Layout from "./Layout";

import tripData from "./tripData.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
  },
  table: {
    //minWidth: 650
  },
}));

function DenseTable(props) {
  const classes = useStyles();
  const { locations } = tripData;
  return (
    <Layout>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations.map((row, id) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.at}</TableCell>
                    {row.link ? (
                      <TableCell>{row.details} </TableCell>
                    ) : (
                      <TableCell>
                        <a href={row.link}>{row.details}</a>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </Layout>
  );
}

DenseTable.defaultProps = {
  showLinks: false,
  showTimes: false,
};

export default DenseTable;
