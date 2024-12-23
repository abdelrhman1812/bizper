import { type BlogPost } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

const SingleBlog = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md   p-3">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className="w-full  object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 flex">
          <div className="bg-red-500 text-white text-center py-1 px-2 rounded-l">
            <span className="text-xl font-bold text-secondary">
              {post.date.day}
            </span>
          </div>
          <div className="bg-white py-1 px-2 rounded-r">
            <span className="text-xl font-bold text-secondary">
              {post.date.month}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-lightGray mb-4">
          <span>{post.author}</span>
          <span className="mx-2">/</span>
          <span>{post.category}</span>
        </div>

        <h2 className="text-2xl font-bold text-secondary mb-4 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-lightGray mb-4 line-clamp-2">{post.excerpt}</p>

        <Link
          href={`/`}
          title={post.title}
          className="inline-flex items-center text-gray-900 font-semibold hover:text-red-500 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default SingleBlog;
