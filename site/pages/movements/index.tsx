import Post from "../../components/Post/Post";
import PostProps from "../../models/PostProps";

// const Movements = ({ posts }: any) => {
const Movements = () => {
  const posts = [
    {
      _id: "61b6acaf8ea7d322aa156f47",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6acba8ea7d322aa156f49",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#FDB5B5",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6acaf8ea7d322aa156f47",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6acba8ea7d322aa156f49",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#FDB5B5",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6acaf8ea7d322aa156f47",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6acba8ea7d322aa156f49",
      label: "Движение",
      title:
        "Двигателна практика йога учител и неговите ексклузивни разсъждения",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#FDB5B5",
      type: "movement",
      author: "Daniela Petrova",
      __v: 0,
    },
  ];

  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        posts.map((post: PostProps) => (
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
        ))
      ) : (
        <h1>Unfortunately, there are no posts regarding this subject!</h1>
      )}
    </div>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:4000/movements`);
//   const data = await response.json();

//   return {
//     props: { posts: data.data.posts },
//   };
// }
export default Movements;
