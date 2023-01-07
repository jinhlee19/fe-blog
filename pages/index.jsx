import Layout from "@/components/Layout";

export default function LandingPage() {
  return (
    <Layout>
      <section className="content-list grid-cols-4">
        <article className="card space-y-4 border border-text-lighter w-72">
          <h4 className="card__subtitle">카테고리</h4>
          <h2 className="card__title">
            The New Autumn Denim Guide: The Best Gift For Stylish Women
          </h2>
          <hr className="divider--sm w-8" />
          <time>Monday, June 20, 2022</time>
        </article>
      </section>
    </Layout>
  );
}
