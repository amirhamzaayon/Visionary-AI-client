import { ForumComment } from "./ForumComment";

export const ForumComments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <ForumComment key={index} comment={comment}></ForumComment>
      ))}
    </div>
  );
};
