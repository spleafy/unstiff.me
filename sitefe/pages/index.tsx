import type { NextPage } from "next";
import Posts from "../components/Posts/Posts";
import PostProps from "../models/PostProps";

export async function getServerSideProps(context: any) {
  const response = await fetch("http://dockerpi.asuscomm.com:4040/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.data.posts,
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

export const idPush = (posts: any) => {
  let allPosts: any = [];

  posts.forEach((post: any) => {
    Object.keys(post).forEach((key) => {
      if (key == "recipe" && post.recipe != null) {
        post.recipe._id = post._id;
        allPosts.push(post.recipe);
      } else if (key == "movement" && post.movement != null) {
        post.movement._id = post._id;
        allPosts.push(post.movement);
      } else if (key == "interview" && post.interview != null) {
        post.interview._id = post._id;
        allPosts.push(post.interview);
      } else if (key == "sutra" && post.sutra != null) {
        post.sutra._id = post._id;
        allPosts.push(post.sutra);
      }
    });
  });

  return allPosts;
};

const Home: NextPage = ({ posts }: any) => {
  const allPosts = idPush(posts);

  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-video">
        <video src="yoga.mp4" controls></video>
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
