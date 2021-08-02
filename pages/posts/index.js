import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is the react framework for production -it makes building fullstack react apps and sites a breeze",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS1",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is the react framework for production -it makes building fullstack react apps and sites a breeze2",
    date: "2022-01-10",
    slug: "getting-started-with-nextjs",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
