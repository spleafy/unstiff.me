import Posts from "../../components/Posts/Posts";

const Interviews = ({ posts }: any) => {
  const filteredPosts: any = [];
  posts.forEach((post: any) => {
    if (post.interview != null) {
      filteredPosts.push({ interview: post.interview, _id: post._id });
    }
  });

  return (
    <div className="ue-main-cards">
      {posts.length > 0 && posts[0].interview ? (
        <Posts posts={filteredPosts} />
      ) : (
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Unfortunately, there are no posts regarding this subject!
        </h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://dockerpi.asuscomm.com:4040/posts`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Interviews;