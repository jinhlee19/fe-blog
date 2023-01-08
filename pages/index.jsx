import Layout from "@/components/Layout";
import Image from "next/image";
import { API_URL } from "../config";

export default function LandingPage({ blogs }) {
  console.log(blogs);
  return (
    <Layout>
      <section className="mx-auto max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-xl xl:max-w-screen-2xl grid">
        {/* <div className="card-container grid lg:grid-cols-4"> */}
        <div className="columns-1 md:columns-2 lg:columns-4 space-x-6">
          {blogs.map((blog) => (
            <div
              className="card mb-8 w-72 text-center space-y-4 py-8"
              key={blog.id}
            >
              <figure className="w-72 h-full relative mb-4 ">
                <Image
                  src={blog.imageUrl}
                  width={300}
                  height={400}
                  // layout="fill"
                  className=" object-contain"
                  alt="."
                ></Image>
              </figure>
              <h4 className="card__subtitle text-sky-500">{blog.category}</h4>
              <h2 className="card__title">{blog.title}</h2>
              <div className="flex justify-center pb-4">
                <hr className="divider--sm w-8" />
              </div>
              <time>{blog.time}</time>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/blogs`);
  const blogs = await res.json();
  console.log(blogs); // 여기서는 서버에서 호출
  return {
    props: { blogs },
  };
}
