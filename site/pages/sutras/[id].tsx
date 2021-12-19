import PostProps from "../../models/PostProps";
import PlayButton from "../../components/PlayButton/PlayButton";
import ProfilePicture from "../../public/profilepicture.jpg";
import Posts from "../../components/Posts/Posts";
import { idPush } from "..";
import { definePostLabel } from "../../components/Post/Post";

export async function getServerSideProps({ params }: any) {
  const response = await fetch(`http://localhost:4000/post/${params.id}`);
  const data = await response.json();
  return {
    props: {
      post: data.data.post[0],
    },
  };
}

const Sutra = ({ post }: any) => {
  const otherPosts: any = [
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

  return (
    <>
      <div className="ue-main-header">
        <div>
          <div className="ue-main-header__label">
            {definePostLabel(post.sutra.type)}
          </div>
          <div className="ue-main-header__person">
            {ProfilePicture.src ? (
              <div className="ue-main-header__image">
                <img src={ProfilePicture.src} />
              </div>
            ) : (
              <></>
            )}

            <div className="ue-main-header__text">
              <h1>{post.sutra.title}</h1>
              <p>{post.sutra.subtitle}</p>
              <PlayButton width={40} height={40} />
            </div>
          </div>
          <div className="ue-main-header__description">
            {post.sutra.description}
          </div>
        </div>
      </div>
      <div className="ue-main-cards">
        <Posts posts={otherPosts} />
      </div>
    </>
  );
};

export default Sutra;
