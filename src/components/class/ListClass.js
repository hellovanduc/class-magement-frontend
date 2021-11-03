import React from "react";
import { Table } from "react-bootstrap";

const ListClass = (props) => {
  const classes = props.classes;

  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Class name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => {
            return (
              <tr key={c._id}>
                <td>{c._id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ListClass;
