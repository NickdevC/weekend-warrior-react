import React from 'react';
import NoResults from "../assets/WW-no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "../components/Asset";

const NotFound = () => {
  return (
    <div className={styles.Margin}>
        <Asset src={NoResults} message={"Sorry, the page you're looking for doesn't exist"} />
    </div>
  )
}

export default NotFound