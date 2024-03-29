import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
       <ApprovalCard>
      <CommentDetail author ="Sam" 
       time = "Today at 6:00PM" 
       content = "Nice blog post!"
        avatar= {faker.image.avatar()}
        />
        </ApprovalCard>

       <ApprovalCard>
      <CommentDetail author = "Alex"
       time = "Today at 5:00PM" 
       content = "cool blog!" 
       avatar= {faker.image.avatar()}
       />
       </ApprovalCard>

       <ApprovalCard>
      <CommentDetail author = "Jane" 
        time = "Today at 1:00PM" 
        content = "Awsome post!"
        avatar = {faker.image.avatar()}
        />
        </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
