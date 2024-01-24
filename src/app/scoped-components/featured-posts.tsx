import FeaturedPostsCard from "./featured-posts-card";

const featuredPosts = [
  {
    title: "Loudest à la Madison #1 (L'integral)",
    body: "We focus on ergonomics and meeting you where you work. It's only a  keystroke away.",
    image: "/images/featured-post-1.webp",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    body: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "/images/featured-post-2.webp",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    body: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "/images/featured-post-3.webp",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="text-center mt-[243px] mb-[112px]">
      <p className="text-[14px] text-blue font-bold">Practice Advice</p>
      <h3 className="text-[40px] text-black font-bold">Featured Posts</h3>
      <FeaturedPostsCard posts={featuredPosts} />
    </section>
  );
};

export default FeaturedPosts;
