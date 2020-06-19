import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Comment.module.scss";

const Comment = (props) => {
  const renderFit = (comment) => {
    if (comment.fit) {
      return (
        <div className={style["comment-fit"]}>
          <label className={style["statement"]}>FIT</label>
          <ul className={style.likert}>
            {[...Array(5)].map((e, i) => {
              let labelFit;
              if (i === 0) {
                labelFit = <label>Very Small</label>;
              } else if (i === 4) {
                labelFit = <label>Very Large</label>;
              } else {
                labelFit = <label />;
              }
              return (
                <li key={`fit-` + i}>
                  <input
                    type="radio"
                    name={`radio-fit-${comment.user}`}
                    disabled
                    checked={i + 1 === comment.fit ? true : false}
                  />
                  {labelFit}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const renderLength = (comment) => {
    if (comment.length) {
      return (
        <div className={style["comment-length"]}>
          {" "}
          <label className={style["statement"]}>LENGTH</label>
          <ul className={style["likert"]}>
            {[...Array(5)].map((e, i) => {
              let labelFit;
              if (i === 0) {
                labelFit = <label>Very Short</label>;
              } else if (i === 4) {
                labelFit = <label>Very Long</label>;
              } else {
                labelFit = <label />;
              }
              return (
                <li key={`length-` + i}>
                  <input
                    type="radio"
                    name={`radio-length-${comment.user}`}
                    disabled
                    checked={i + 1 === comment.length ? true : false}
                  />
                  {labelFit}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };
  const renderQuality = (comment) => {
    if (comment.quality) {
      return (
        <div className={style["comment-quality"]}>
          {" "}
          <label className={style["statement"]}>QUALITY</label>
          <ul className={style["likert"]}>
            {[...Array(5)].map((e, i) => {
              let labelFit;
              if (i === 0) {
                labelFit = <label>Poor</label>;
              } else if (i === 4) {
                labelFit = <label>Perfect</label>;
              } else {
                labelFit = <label />;
              }
              return (
                <li key={`quality-` + i}>
                  <input
                    type="radio"
                    name={`radio-quality-${comment.user}`}
                    disabled
                    checked={i + 1 === comment.quality ? true : false}
                  />
                  {labelFit}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  if (props.comments) {
    let comments = props.comments;
    let commentsArray = Object.keys(comments);
    return commentsArray.map((comment, i) => {
      return (
        <div className={style["comment-container"]}>
          <div className={style["comment-user-info"]}>
            <span className={style["comment-user-id"]}>
              {comments[comment].user}
            </span>
            <span className={style["comment-user-location"]}>
              {comment.location}
            </span>
          </div>
          <div className={style["comment-details"]}>
            <div className={style["comment-title"]}>
              {comments[comment].title}
            </div>
            <div className={style["comment-content"]}>
              {comments[comment].comment}
            </div>
          </div>
          <div className={style["comment-rating"]}>
            <div className={style["comment-star-title"]}>RATING</div>
            <div className={style["comment-star-container"]}>
              <div className={style["stars-outer"]}>
                <div
                  className={style[`stars-inner-${comments[comment].rating}`]}
                ></div>
              </div>
            </div>
            {renderFit(comments[comment])}
            {renderLength(comments[comment])}
            {renderQuality(comments[comment])}
          </div>
        </div>
      );
    });
  } else {
    return <div />;
  }
};

const mapStateToProps = (state) => {
  const comments = state.firestore.data.comments;
  return {
    comments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "comments",
      doc: props.clothesId,
      subcollections: [{ collection: "comment" }],
      storeAs: "comments",
    },
  ])
)(Comment);
