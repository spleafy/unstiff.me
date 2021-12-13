import Post from "../../components/Post/Post";
import PostProps from "../../models/PostProps";

const Interviews = ({ posts }: any) => {
  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        posts.map((post: PostProps) => (
          <Post
            title={post.title}
            label={post.label}
            redirectURL={post.redirectURL}
            audioURL={post.audioURL}
            postColor={post.postColor}
            imgSource={post.imgSource}
            subtitle={post.subtitle}
            description={post.description}
            headingImgSource={post.headingImgSource}
            type={post.type}
            _id={post._id}
            key={post._id}
          />
        ))
      ) : (
        <h1>Unfortunately, there are no posts regarding this subject!</h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/interviews`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}
export default Interviews;
