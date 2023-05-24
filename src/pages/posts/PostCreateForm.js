import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults"

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    subheading: "",
    location: "",
    family: "",
    weather: "",
    terrain: "",
    cost: "",
    duration: "",
    description: "",
    image: "",
  });
  const {
    title,
    subheading,
    location,
    family,
    weather,
    terrain,
    cost,
    duration,
    description,
    image,
  } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("subheading", subheading);
    formData.append("location", location);
    formData.append("family", family);
    formData.append("weather", weather);
    formData.append("terrain", terrain);
    formData.append("cost", cost);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/adventures/", formData);
      history.push(`/adventures/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subheading</Form.Label>
        <Form.Control
          type="text"
          name="subheading"
          value={subheading}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Where's the adventure?"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Family friendly?</Form.Label>
        <Form.Control
          as="select"
          defaultValue="unsure"
          name="family"
          aria-label="family"
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unsure">Unsure</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>All weather?</Form.Label>
        <Form.Control
          as="select"
          defaultValue="unsure"
          name="weather"
          aria-label="weather"
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unsure">Unsure</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Terrain difficulty</Form.Label>
        <Form.Control
          as="select"
          defaultValue="smooth sailing"
          name="terrain"
          aria-label="terrain"
          onChange={handleChange}
        >
          <option value="smooth sailing">Smooth sailing</option>
          <option value="a little bumpy">A little bumpy</option>
          <option value="climbing required">Climbing required</option>
          <option value="a real challenge">A real challenge!</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Cost?</Form.Label>
        <Form.Control
          as="select"
          defaultValue="free"
          name="cost"
          aria-label="cost"
          onChange={handleChange}
        >
          <option value="free">Free</option>
          <option value="£">£</option>
          <option value="££">££</option>
          <option value="£££">£££</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Duration?</Form.Label>
        <Form.Control
          as="select"
          defaultValue="< 1 hour"
          name="duration"
          aria-label="duration"
          onChange={handleChange}
        >
          <option value="< 1 hour">&lt; 1 hour</option>
          <option value="a few hours">A few hours</option>
          <option value="half-day">Half-day</option>
          <option value="full-day">Full-day</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
