import PostProps from "../../models/PostProps";
import PlayButton from "../../components/PlayButton/PlayButton";
import Posts from "../../components/Posts/Posts";

interface RecipeProps {
  post: PostProps;
  other: any;
}

export async function getServerSideProps({ params }: any) {
  const response = await fetch(`http://localhost:4000/recipes/${params.id}`);
  const data = await response.json();
  return {
    props: {
      post: data.data.post,
      other: data.data.other,
    },
  };
}

const Recipe = ({ post, other }: RecipeProps) => {
  return (
    <>
      <div className="ue-main-header">
        <div>
          <div className="ue-main-header__label">{post.label}</div>
          <div className="ue-main-header__person">
            <div className="ue-main-header__text">
              <h1>{post.title}</h1>
              <PlayButton width={40} height={40} />
            </div>
          </div>
          <div className="ue-main-header__description">{post.description}</div>
        </div>
      </div>
      <div className="ue-main-cards">
        <Posts posts={other} />
      </div>
    </>
  );
};

export default Recipe;
