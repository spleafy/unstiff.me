import Link from "next/link";
import SinglePost from "../../components/SinglePost/SinglePost";

export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_SIBE_PORT}/post/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data.data.post,
    },
  };
}

const Sutra = ({ post }: any) => {
  let otherPosts: any = [];

  if (post) {
    otherPosts = [
      {
        interview: post.interview,
        _id: post._id,
      },
      {
        recipe: post.recipe,
        _id: post._id,
      },
      {
        movement: post.movement,
        _id: post._id,
      },
    ];
  }

  return (
    <>
      {post.sutra ? (
        <SinglePost post={post} type="sutra" otherPosts={otherPosts} />
      ) : (
        <div className="ue-main-cards" style={{ justifyContent: "center" }}>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            This post does not exist!{" "}
            <Link href="/" passHref>
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Please go back to the home page!
              </span>
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Sutra;
