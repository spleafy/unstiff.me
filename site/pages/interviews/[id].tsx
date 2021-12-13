import PostProps from "../../models/PostProps";
import Post from "../../components/Post/Post";
import PlayButton from "../../components/PlayButton/PlayButton";
import ProfilePicture from "../../public/profilepicture.jpg";

interface InterviewProps {
  post: PostProps;
  other: any;
}

// export async function getServerSideProps({ params }: any) {
//   const response = await fetch(`http://localhost:4000/interviews/${params.id}`);
//   const data = await response.json();
//   return {
//     props: {
//       post: data.data.post,
//       other: data.data.other,
//     },
//   };
// }

// const Interview = ({ post, other }: InterviewProps) => {
const Interview = () => {
  const post = {
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
  };

  const other = [
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
    },
  ];

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

export default Interview;
