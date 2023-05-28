import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import styles from "../../styles/About.module.css";
import appStyles from "../../App.module.css";
import about_image from "../../assets/about_image.jpg";

function About() {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${styles.Content} p-4 text-center`}>
          <h2>
            <strong>Weekend Warrior</strong>
          </h2>
          <hr />
          <p className={styles.Sub}>
            ...Where we take 'living for the weekend' very seriously!
          </p>
          <hr />
          <p>
            <strong>Weekend Warrior</strong> is an app that encourages people to
            come together and share experiences that are perfect for the
            weekend. On the surface, we are a social networking space, but at
            our heart, we hope to be an inspiration - a 'motivator of adventure'
            if you will.
          </p>
          <p>
            Sign up for an account and you will be able to <strong>post</strong>{" "}
            about your most recent weekend experience, sharing all the key
            information that other's will find helpful. You can browse other's
            <strong> posts</strong> and even <strong>favourite</strong> the posts
            that you don't want to forget. If you want clarity on an adventure,
            or simply want to tell a user how 'freaking awesome' they are, then
            you can add a <strong>comment</strong>!
          </p>
          <p>
            Feel free to browse the <strong>popular profiles</strong> and if you
            find someone who shares a similar taste for adventure as you, then{" "}
            <strong>follow them</strong> and forever be updated by their
            activity in your <strong>feed</strong>.
          </p>
          <p>
            So, what are you waiting for? Go start exploring your next adventure
            and be a true
            <strong> Weekend Warrior!</strong>
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
