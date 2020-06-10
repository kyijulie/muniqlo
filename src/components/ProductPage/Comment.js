import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Comment.module.scss";

const Comment = (props) => {
  const { comment } = props;
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
        <div className={style["comment-content"]}>{comment.comment}</div>
      </div>
      <div className={style["comment-rating"]}>
        <div className={style["comment-star-title"]}>Rating</div>
        <div className={style["comment-star-container"]}>
          <div className={style["stars-outer"]}>
            <div className={style[`stars-inner-${comment.rating}`]}></div>
          </div>
        </div>
        <div className={style["comment-fit"]}>{comment.fit}</div>
        <div className={style["comment-length"]}>{comment.length}</div>
        <div className={style["comment-quality"]}>{comment.quality}</div>
      </div>
    </div>
  );
};

export default Comment;
