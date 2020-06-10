import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ProductPage = (props) => {
  const { clothesId } = props;
  const renderComments = () => {
    console.log(props);
    if (props.clothes) {
      let comments = props.clothes;
      let commentsArray = Object.keys(comments);
      return commentsArray.map((comment, i) => {
        return <Comment key={i} comment={comments[comment]} />;
      });
    }
  };

  return (
    <div>
      ProductPage
      {renderComments()}
    </div>
  );
};
// class ProductPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     const { clothesId } = this.props;
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <div>
//         ProductPage
//         <Comments />
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  const clothes = state.firestore.data.clothes;
  return {
    clothes,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "clothes",
      doc: props.clothesId,
      subcollections: [{ collection: "comments" }],
      storeAs: "clothes",
    },
  ])
  // firestoreConnect([
  //   {
  //     collection: "clothes",
  //     doc: "425371",
  //     subcollections: [{ collection: "comments" }],
  //   },
  // ])
)(ProductPage);
