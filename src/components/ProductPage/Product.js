import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Product = (props) => {

  const renderComments = () => {
    // if (props.clothes) {
    //   let comments = props.clothes;
    //   let commentsArray = Object.keys(comments);
    //   return commentsArray.map((comment, i) => {
    //     return <Comment key={i} />;
    //   });
    // }
  };

  return (
    <div>
      Product
      {/* {renderComments()} */}
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
  // const comment = state.firestore.data.comment;
  return {
    clothes,
    // comment,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "clothes",
      doc: props.clothesId,
      storeAs: "clothes",
    },
    // {
    //   collection: "comments",
    //   doc: props.clothesId,
    //   // subcollections:
    //   subcollections: [{ collection: "comment" }],
    //   storeAs: "comment",
    // },
  ])
  // firestoreConnect([
  //   {
  //     collection: "clothes",
  //     doc: "425371",
  //     subcollections: [{ collection: "comments" }],
  //   },
  // ])
)(Product);

// export default connect(mapStateToProps)(ProductPage);
