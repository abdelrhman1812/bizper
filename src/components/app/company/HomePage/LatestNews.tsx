import TitleSection from "@/components/common/TitleSection/TitleSection";
import { BLOG_POSTS } from "@/data/mock-blogs";
import SingleBlog from "../BlogPage/SingleBlog";

const LatestNews = () => {
  return (
    <section className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title="LATEST BLOG" subtitle="Latest News & Articles" />
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <SingleBlog key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
