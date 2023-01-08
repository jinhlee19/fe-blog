const { blogs } = require("../data.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const blog = blogs.filter((log) => log.slug === req.query.slug);
  if (req.method === "GET") {
    console.log(blog);
    res.status(200).json(blog);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
