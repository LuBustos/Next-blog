import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POST = {
  title: "Getting Started with NextJS1",
  image: "getting-started-with-nextjs.png",
  excerpt:
    "NextJS is the react framework for production -it makes building fullstack react apps and sites a breeze2",
  date: "2022-01-10",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
