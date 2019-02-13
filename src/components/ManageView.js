import React from "react";
import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";
import TabContainer from "./TabContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default () => (
  <TabContainer>
    <Typography variant="h3">Manage Maps</Typography>
    <p>
      I'm the Manage view! I will contain the list of maps, and also links to
      Edit each one, and change its settings.
    </p>
    <p>
      <Button variant="outlined">Add Existing Map</Button>
      <Button variant="outlined">Create New Map</Button>
    </p>
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Map</TableCell>
          <TableCell align="right">Active</TableCell>
          <TableCell align="right">Last Run</TableCell>
          <TableCell align="right" />
          <TableCell align="right" />
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">
              <Checkbox />
            </TableCell>
            <TableCell align="right">
              {row.id} ago
              <br />
              {row.fat}s<br />
              {row.carbs} warnings
            </TableCell>
            <TableCell align="right">
              <Button variant="outlined">Properties</Button>
            </TableCell>
            <TableCell align="right">
              <Button variant="outlined">Permissions</Button>
            </TableCell>
            <TableCell align="right">
              <Button color="secondary" variant="outlined">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TabContainer>
);
