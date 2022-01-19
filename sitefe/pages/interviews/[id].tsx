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

const Interview = ({ post }: any) => {
  let otherPosts: any = [];

  if (post) {
    otherPosts = [
      {
        recipe: post.recipe,
        _id: post._id,
      },
      {
        movement: post.movement,
        _id: post._id,
      },
      {
        sutra: post.sutra,
        _id: post._id,
      },
    ];
  }

  return (
    <>
      {post.interview ? (
        <SinglePost type="interview" post={post} otherPosts={otherPosts} />
      ) : (
        <div
          className="ue-main-cards"
          style={{ justifyContent: "center!important" }}
        >
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

export default Interview;
