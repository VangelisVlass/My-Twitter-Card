import { useState } from 'react';
import styles from "./styles.module.css";

export function TwitterCardFunction(props) {
  const [ numberOfClicks, setNumberOfClicks ] = useState(0);

  const containerClicked = () => {
    setNumberOfClicks(prev => prev + 1);
  }

  return (
    <div className={styles.container} onClick={containerClicked}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.iconContainer}>
            <i className={`fa fa-twitter ${styles.circleIcom}`}/>
            <div className={styles.containerFlexColumn}>
              <div className={styles.postAuthor}>
                <h6>Twitter Function {numberOfClicks}</h6>
                <img
                  src="quality.png"
                  alt="check"
                  className={styles.check}
                />
              </div>
              <p className={styles.authorText}>{`@ ${props.user}`}</p>
            </div>
          </div>
          <i className={`fa fa-twitter ${styles.twitterIcon}`}/>
        </div>
        <div className={styles.descr}>
          <p>{props.description}</p>
        </div>
        <div className={styles.post}>
          <img
            src="Twitter.jpg"
            alt="twitter-post"
            className={styles.postImg}
          />
          <div className={styles.postData}>
            <h6 className={styles.postTitleText}>{props.title}</h6>
            <p className={styles.postSubtitleText}>{props.subtitle}</p>
            <a href={props.url.target} className={styles.urlText}>
              {props.url.label}
            </a>
          </div>
        </div>
        <div className={`${styles.cardHeader} ${styles.likesSection}`}>
          <div className={styles.iconContainer}>
            <i className={`fa fa-heart-o ${styles.iconSize}`}></i>
            <p className={styles.likes}>{props.numOfHearts}</p>
            <p>{props.date}</p>
          </div>
          <i className={`fa fa-info ${styles.iconSize}`}/>
        </div>
      </div>
      <a href={props.commentUrl} className={styles.commentsSection}>
          <div className={styles.iconContainer}>
            <i className={`fa fa-comment-o ${styles.iconSize}`}/>
            <p className={styles.comments}>{props.numOfComments}</p>
            <p>people talking about this</p>
          </div>
          <i className={`fa fa-angle-right ${styles.iconSize}`}/>
      </a>
    </div>
  );
}
