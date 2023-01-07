import Head from "next/head";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={description} />
      </Head>
      <nav className="header mx-auto">{children}</nav>
    </div>
  );
}

Layout.defaultProps = {
  title: "Dslog | Agency Blog for Design and Development",
  description: "Sharing valuable memories of DShine",
  keyword: "Design, Development, Blog",
};
