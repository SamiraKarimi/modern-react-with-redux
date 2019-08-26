import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author ="Sam"  time = "Today at 6:00PM"  comment = "Nice blog post!"/>
      <CommentDetail author = "Alex"  time = "Today at 5:00PM"  comment = "cool blog!"/>
      <CommentDetail author = "Jane"  time = "Today at 1:00PM"  comment = "Awsome post!"/>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
