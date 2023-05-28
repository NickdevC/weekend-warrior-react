import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import styles from "../../styles/About.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import about_image from "../../assets/about_image.jpg";

function About() {
  useRedirect("loggedOut");
  return (
    <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container className={`${styles.Content} p-4 text-center`}>
            <h2>
                <strong>About us</strong>
            </h2>
            <hr />
            <p>
                Welcome to The Winding Path! 
            </p>
            <p>
                The Winding Path is a place where lovers of the great outdoors can post information about their favourite walks,
                and share artwork and photography inspired by the beautiful natural world they encounter. 
            </p>
            <p>
                <strong>Create a Walk Post</strong> - share handy information on your favourite walks,
                so that fellow community members know what to expect if they follow in your footsteps.
            </p>
            <p>
                <strong>Create a Gallery Post</strong> - If photography or artwork is your thing, share your creations with a Gallery Post.
            </p>
            <p>
            <strong>Interact</strong> - You can save your favourite walk posts and access them in your Saved Walks feed, as well as post
                comments on individual posts. Gallery posts can be liked and commented on too. 
            </p>
            <p>
                Create your first post to get started. Happy hiking!
            </p>
            <br />
            </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.PictureCol}`}
      >
        <Image className={`${appStyles.FillerImage}`} src={about_image} />
      </Col>
    </Row>
  );
}

export default About;