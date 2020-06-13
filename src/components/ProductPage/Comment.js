import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Comment.module.scss";

const Comment = (props) => {
  console.log("hello", props);

  const { comments } = props;
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
                <li>
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
                <li>
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
      // document.getElementById(
      //   `comment-quality-${comment.quality}`
      // ).checked = true;
      console.log(typeof comment.quality);
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
                <li>
                  <input
                    type="radio"
                    name={`radio-length-${comment.user}`}
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
  return (
    <>
      {comments &&
        comments.map((comment) => {
          return (
            <div className={style["comment-container"]}>
              <div className={style["comment-user-info"]}>
                <span className={style["comment-user-id"]}>{comment.user}</span>
                <span className={style["comment-user-location"]}>
                  {comment.location}
                </span>
              </div>
              <div className={style["comment-details"]}>
                <div className={style["comment-title"]}>{comment.title}</div>
                <div className={style["comment-content"]}>
                  {comment.comment}
                </div>
              </div>
              <div className={style["comment-rating"]}>
                <div className={style["comment-star-title"]}>RATING</div>
                <div className={style["comment-star-container"]}>
                  <div className={style["stars-outer"]}>
                    <div
                      className={style[`stars-inner-${comment.rating}`]}
                    ></div>
                  </div>
                </div>
                {renderFit(comment)}
                {renderLength(comment)}
                {renderQuality(comments)}
              </div>
            </div>
          );
        })}
    </>
  );
};

// export default Comment;
const mapStateToProps = (state) => {
  console.log("this is state", state.firestore.data);
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
  // firestoreConnect([
  //   {
  //     collection: "clothes",
  //     doc: "425371",
  //     subcollections: [{ collection: "comments" }],
  //   },
  // ])
)(Comment);
