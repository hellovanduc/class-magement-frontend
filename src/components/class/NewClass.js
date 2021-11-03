import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "./NewClass.scss";

const NewClass = (props) => {
  const setIsShow = props.setIsShow;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const closeHandler = () => setIsShow(false);

  const saveHandler = (event) => {
    event.preventDefault();
    props.save({
      name: name,
      description: description
    });
    setName('')
    setDescription('')
    setIsShow(false);
  };

  return (
    <Modal show={props.isShow} onHide={closeHandler}>
      <Form onSubmit={saveHandler}>
        <Modal.Header closeButton>
          <Modal.Title>New class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              row={5}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewClass;
