import Posts from "../../components/Posts/Posts";

const Movements = ({ posts }: any) => {
  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <h1>Unfortunately, there are no posts regarding this subject!</h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/movements`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Movements;
