import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/About.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function About() {
  useRedirect("loggedOut");
  return (
    <Row className={styles.Row}>
        <Col>
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
    </Row>
  );
}

export default About;