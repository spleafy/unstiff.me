import type { NextPage } from "next";
import Posts from "../components/Posts/Posts";

export async function getServerSideProps(context: any) {
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

export const chunkify = (a: any, n: any, balanced: any) => {
  if (n < 2) return [a];

  var len = a.length,
    out = [],
    i = 0,
    size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      out.push(a.slice(i, (i += size)));
    }
  } else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / n--);
      out.push(a.slice(i, (i += size)));
    }
  } else {
    n--;
    size = Math.floor(len / n);
    if (len % size === 0) size--;
    while (i < size * n) {
      out.push(a.slice(i, (i += size)));
    }
    out.push(a.slice(size * n));
  }

  return out;
};

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-video">
        <video src="../public/yoga.mp4" controls></video>
      </div>
      <div className="ue-main-cards">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <h1>Unfortunately, there are no posts regarding this subject!</h1>
        )}
      </div>
    </>
  );
};

export default Home;
