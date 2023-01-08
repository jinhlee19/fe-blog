import Layout from "@/components/Layout";
import PostItem from "@/components/PostItem";
import { API_URL } from "../config";

export default function LandingPage({ posts }) {
  return (
    <Layout>
      <section className="card-container px-16 columns-1 md:columns-2 lg:columns-4 2xl:columns-6 flex justify-between items-center w-full">
        {/* <div className="card-container grid lg:grid-cols-4"> */}
        {posts.length === 0 && <div>No post To Show</div>}
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: { posts: posts.slice(0, 4) },
  };
}
