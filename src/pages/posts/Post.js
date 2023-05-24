import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    favourites_count,
    favourite_id,
    title,
    subheading,
    location,
    family,
    weather,
    terrain,
    cost,
    duration,
    description,
    post_image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/adventures/${id}`}>
        <Card.Img src={post_image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {subheading && (
          <Card.Text className={styles.Subheading}>{subheading}</Card.Text>
        )}
        <Row className={`${styles.Row} ${styles.Icon}`}>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i className="fa-solid fa-location-crosshairs" />
              </span>
              : {location}
            </p>
          </Col>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i className="fa-solid fa-family" />
              </span>
              : {family}
            </p>
          </Col>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i className="fa-solid fa-clouds" />
              </span>
              : {weather}
            </p>
          </Col>
        </Row>
        <Row className={`${styles.Row} ${styles.Icon}`}>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i className="fa-solid fa-mountain" />
              </span>
              : {terrain}
            </p>
          </Col>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i className="fa-solid fa-circle-sterling" />
              </span>
              : {cost}
            </p>
          </Col>
          <Col>
            <p>
              <span className={styles.Icon}>
                <i class="fa-regular fa-timer" />
              </span>
              : {duration}
            </p>
          </Col>
        </Row>
        {description && <Card.Text>{description}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger placement="top" overlay={<Tooltip>You cannot like your own post!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : favourite_id ? (
            <span onClick={() =>{}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() =>{}}>
              <i className={`fas fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to favourite a post!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {favourites_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
