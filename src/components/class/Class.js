import { Button, Col, Container, Row } from "react-bootstrap";
import ListClass from "./ListClass";
import NewClass from "./NewClass";

import { useEffect, useState } from "react";

import config from "../../config/dev.json";

const Class = (props) => {
  const [classes, setClasses] = useState([]);
  const [showNewClassModal, setShowNewClassModal] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const addNewClass = (newClass) => {
    fetch(`${config.apiUrl}/classes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((result) => {
        fetchClasses();
      })
      .catch((err) => console.log(err));
  };

  const fetchClasses = () => {
    fetch(`${config.apiUrl}/classes`)
      .then((res) => res.json())
      .then((result) => {
        setClasses(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleNewClassModal = () => {
    setShowNewClassModal((prevState) => !prevState);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="success" onClick={toggleNewClassModal}>
            New class
          </Button>
        </Col>
      </Row>
      <br />
      <ListClass classes={classes}></ListClass>
      <NewClass
        isShow={showNewClassModal}
        setIsShow={setShowNewClassModal}
        save={addNewClass}
      ></NewClass>
    </Container>
  );
};

export default Class;
