import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keyword, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      <nav className="header mx-auto">{children}</nav>
    </>
  );
}

Layout.defaultProps = {
  title: "Dslog | Agency Blog for Design and Development",
  description: "Sharing valuable memories of DShine",
  keyword: "Design, Development, Blog",
};
