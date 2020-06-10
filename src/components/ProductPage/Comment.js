import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Comment.module.scss";

const Comment = (props) => {
  const { comment } = props;
  const renderFit = () => {
    if (comment.fit) {
      return (
        <div className={style["comment-fit"]}>
          <label className={style["statement"]}>FIT</label>
          <ul className={style["likert"]}>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="disagree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>
      );
    }
  };

  const renderLength = () => {
    if (comment.length) {
      return (
        <div className={style["comment-length"]}>
          {" "}
          <label className={style["statement"]}>LENGTH</label>
          <ul className={style["likert"]}>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="disagree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>
      );
    }
  };
  const renderQuality = () => {
    if (comment.quality) {
      return (
        <div className={style["comment-quality"]}>
          {" "}
          <label className={style["statement"]}>QUALITY</label>
          <ul className={style["likert"]}>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
            </li>
            <li>
              <input type="radio" name="likert" value="disagree" />
            </li>
            <li>
              <input type="radio" name="likert" value="strong_agree" />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>
      );
    }
  };
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
        {renderFit()}
        {renderLength()}
        {renderQuality()}
      </div>
    </div>
  );
};

export default Comment;
