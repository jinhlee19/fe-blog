import Layout from "@/components/Layout";
import PostItem from "@/components/PostItem";
import { API_URL } from "../config";

export default function LandingPage({ posts }) {
  return (
    <Layout>
      <div className="card-container ">
        <section className="grid grid-cols-4 justify-between w-full px-16">
          {posts.length === 0 && <div>No post To Show</div>}
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </section>
        <div className="mx-auto flex justify-center">
          <button className="btn btn--blue">Show More</button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: { posts },
    // props: { posts: posts.slice(0, 4) },
  };
}
