import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "../styles/Creatingpost.module.css";

const Createpostpage = () => {
  const [uploadPicture, setuploadPicture] = useState()

  const handelingPicture = (event) => {
    const pictures = event.target.files[0]
    const collectingpic = URL.createObjectURL(pictures)
    setuploadPicture(collectingpic)
  }

  return (
    <div>
      <div className={styles.site}>
        <div className={styles.bigdiv}>
          <Form>
            <h3 className="text-center mt-2">Add title</h3>
            <Form.Group className="mb-3">
              <Form.Control type="title" />
            </Form.Group>
            <h4 className="text-center mt-2">Description</h4>
            <FloatingLabel label="Comments">
              <Form.Control
                as="textarea"
              />
            </FloatingLabel>
            <Form.Control 
            type="file" 
            variant="outline-secondary" 
            accept="images/"
            onChange={handelingPicture}/>
            { <div>
              <img src={uploadPicture} alt={uploadPicture}/>
            </div>
              }
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Createpostpage;
