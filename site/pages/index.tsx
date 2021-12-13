import type { NextPage } from "next";
import Post from "../components/Post/Post";
import PostProps from "../models/PostProps";

// export async function getServerSideProps(context: any) {
//   const response = await fetch("http://localhost:4000/posts");
//   const data = await response.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

// const Home: NextPage = ({ posts }: any) => {
const Home: NextPage = () => {
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
      __v: 0,
    },
    {
      _id: "61b6ac798ea7d322aa156f42",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ac8b8ea7d322aa156f45",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "recipe",
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
      _id: "61b6ad018ea7d322aa156f4c",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad1d8ea7d322aa156f51",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
  ];

  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-video">
        <video src="../public/yoga.mp4" controls></video>
      </div>
      <div className="ue-main-cards">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              title={post.title}
              label={post.label}
              redirectURL={post.redirectURL}
              audioURL={post.audioURL}
              postColor={post.postColor}
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
    </>
  );
};

export default Home;
