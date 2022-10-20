import styles from "./styles.module.css";
import React from "react";

export class TwitterCardClass extends React.Component {
  state = {
    numberOfClicks: 0
  }

  containerClicked = () => {
    this.setState(prev => ({ numberOfClicks: prev.numberOfClicks + 1 }));
  }

  render(){
    return (
      <div className={styles.container} onClick={this.containerClicked}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <i className={`fa fa-twitter ${styles.circleIcom}`}/>
              <div className={styles.containerFlexColumn}>
                <div className={styles.postAuthor}>
                  <h6>Twitter Class {this.state.numberOfClicks} </h6>
                  <img
                    src="quality.png"
                    alt="check"
                    className={styles.check}
                  />
                </div>
                <p className={styles.authorText}>{`@ ${this.props.user}`}</p>
              </div>
            </div>
            <i className={`fa fa-twitter ${styles.twitterIcon}`}/>
          </div>
          <div className={styles.descr}>
            <p>{this.props.description}</p>
          </div>
          <div className={styles.post}>
            <img
              src="Twitter.jpg"
              alt="twitter-post"
              className={styles.postImg}
            />
            <div className={styles.postData}>
              <h6 className={styles.postTitleText}>{this.props.title}</h6>
              <p className={styles.postSubtitleText}>{this.props.subtitle}</p>
              <a href={this.props.url.target} className={styles.urlText}>
                {this.props.url.label}
              </a>
            </div>
          </div>
          <div className={`${styles.cardHeader} ${styles.likesSection}`}>
            <div className={styles.iconContainer}>
              <i className={`fa fa-heart-o ${styles.iconSize}`}></i>
              <p className={styles.likes}>{this.props.numOfHearts}</p>
              <p>{this.props.date}</p>
            </div>
            <i className={`fa fa-info ${styles.iconSize}`}/>
          </div>
        </div>
        <a href={this.props.commentUrl} className={styles.commentsSection}>
            <div className={styles.iconContainer}>
              <i className={`fa fa-comment-o ${styles.iconSize}`}/>
              <p className={styles.comments}>{this.props.numOfComments}</p>
              <p>people talking about this</p>
            </div>
            <i className={`fa fa-angle-right ${styles.iconSize}`}/>
        </a>
      </div>
    );
  }
}

