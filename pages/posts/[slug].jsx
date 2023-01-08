import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function postPage({ post }) {
  return (
    <Layout>
      <section className="card-container px-16 flex justify-between items-center w-full ">
        <h1>{post.title}</h1>
      </section>
    </Layout>
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/posts/${slug}`);
  const posts = await res.json();
  console.log(slug);

  return {
    props: { post: posts[0] },
  };
}
