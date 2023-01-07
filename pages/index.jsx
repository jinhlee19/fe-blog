import Layout from "@/components/Layout";
import Image from "next/image";

export default function LandingPage() {
  return (
    <Layout>
      <section className="content-list grid grid-rows-4 text-center">
        <article className="card space-y-4 border border-text-lighter w-72">
          <figure>
            <Image
              src="/asset/image/sample/sample28.jpg"
              width={300}
              height={400}
              alt="."
            ></Image>
          </figure>
          <h4 className="card__subtitle text-sky-500">카테고리</h4>
          <h2 className="card__title">
            The New Autumn Denim Guide: The Best Gift For Stylish Women
          </h2>
          <div className="flex justify-center pb-4">
            <hr className="divider--sm w-8" />
          </div>
          <time>Monday, June 20, 2022</time>
        </article>
      </section>
    </Layout>
  );
}
