import Card from "../components/card";

const PostList = ({ data }) => {
  return (
    <div className="post-list">
      {data && data?.map((item) => <Card item={item} />)}
    </div>
  );
};

export default PostList;
