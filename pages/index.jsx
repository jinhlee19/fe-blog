import Layout from "@/components/Layout";
import Image from "next/image";
import { API_URL } from "../config";

export default function LandingPage({ posts }) {
  return (
    <Layout>
      <section className="mx-auto max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-xl xl:max-w-screen-2xl grid">
        {/* <div className="card-container grid lg:grid-cols-4"> */}
        <div className="columns-1 md:columns-2 lg:columns-4 space-x-6">
          {(posts.length === 11) & <div>No post To Show</div>}
          {posts.map((post) => (
            <div
              className="card mb-8 w-72 text-center space-y-4 py-8"
              key={post.id}
            >
              <figure className="w-72 h-full relative mb-4 ">
                <Image
                  src={post.imageUrl}
                  width={300}
                  height={400}
                  // layout="fill"
                  className=" object-contain"
                  alt="."
                ></Image>
              </figure>
              <h4 className="card__subtitle text-sky-500">{post.category}</h4>
              <h2 className="card__title">{post.title}</h2>
              <div className="flex justify-center pb-4">
                <hr className="divider--sm w-8" />
              </div>
              <time>{post.time}</time>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`${API_URL}/api/posts`);
  // const posts = await res.json();
  // console.log(posts); // 여기서는 서버에서 호출
  const res = await fetch(`${API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
