import Post from "../../components/Post/Post";
import PostProps from "../../models/PostProps";

// const Interviews = ({ posts }: any) => {
const Interviews = () => {
  const posts = [
    {
      _id: "61b6abd48ea7d322aa156f36",
      label: "Интервю",
      imgSource: "../public",
      title: "ЕПИЗОД 1",
      subtitle: "Даниела Петрова",
      description:
        "Част от интервюто с Даниела с дължина четири или пет реда. След клик върху бутона се отваря цялото интервю, както и линк към аудио запис плейър и линк към спотифай, транзистор, епъл мепъл и тн ... Може да се слуша и оттук от play бутона.",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      type: "interview",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6abfc8ea7d322aa156f39",
      label: "Интервю",
      imgSource: "../public",
      title: "ЕПИЗОД 1",
      subtitle: "Даниела Петрова",
      description:
        "Част от интервюто с Даниела с дължина четири или пет реда. След клик върху бутона се отваря цялото интервю, както и линк към аудио запис плейър и линк към спотифай, транзистор, епъл мепъл и тн ... Може да се слуша и оттук от play бутона.",
      redirectURL: "da",
      audioURL: "da",
      type: "interview",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ac238ea7d322aa156f3d",
      label: "Интервю",
      imgSource: "../public",
      title: "ЕПИЗОД 1",
      subtitle: "Даниела Петрова",
      description:
        "Част от интервюто с Даниела с дължина четири или пет реда. След клик върху бутона се отваря цялото интервю, както и линк към аудио запис плейър и линк към спотифай, транзистор, епъл мепъл и тн ... Може да се слуша и оттук от play бутона.",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      type: "interview",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ac258ea7d322aa156f3f",
      label: "Интервю",
      imgSource: "../public",
      title: "ЕПИЗОД 1",
      subtitle: "Даниела Петрова",
      description:
        "Част от интервюто с Даниела с дължина четири или пет реда. След клик върху бутона се отваря цялото интервю, както и линк към аудио запис плейър и линк към спотифай, транзистор, епъл мепъл и тн ... Може да се слуша и оттук от play бутона.",
      redirectURL: "da",
      audioURL: "da",
      type: "interview",
      author: "Daniela Petrova",
    },
  ];

  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            title={post.title}
            label={post.label}
            redirectURL={post.redirectURL}
            audioURL={post.audioURL}
            // postColor={post.postColor}
            // imgSource={post.imgSource}
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

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:4000/interviews`);
//   const data = await response.json();

//   return {
//     props: { posts: data.data.posts },
//   };
// }
export default Interviews;
