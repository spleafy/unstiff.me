import PostProps from "../../models/PostProps";
import Post from "../../components/Post/Post";
import PlayButton from "../../components/PlayButton/PlayButton";
import ProfilePicture from "../../public/profilepicture.jpg";

interface MovementProps {
  post: PostProps;
  other: any;
}

export async function getServerSideProps({ params }: any) {
  const response = await fetch(`http://localhost:4000/movements/${params.id}`);
  const data = await response.json();
  return {
    props: {
      post: data.data.post,
      other: data.data.other,
    },
  };
}

const Movement = ({ post, other }: MovementProps) => {
  return (
    <>
      <div className="ue-main-header">
        <div>
          <div className="ue-main-header__label">{post.label}</div>
          <div className="ue-main-header__person">
            {ProfilePicture.src ? (
              <div className="ue-main-header__image">
                <img src={ProfilePicture.src} />
              </div>
            ) : (
              <></>
            )}

            <div className="ue-main-header__text">
              <h1>{post.title}</h1>
              <p>{post.subtitle}</p>
              <PlayButton width={40} height={40} />
            </div>
          </div>
          <div className="ue-main-header__description">{post.description}</div>
        </div>
      </div>
      <div className="ue-main-cards">
        {other.map((post: PostProps) => (
          <>
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
          </>
        ))}
      </div>
    </>
  );
};

export default Movement;
