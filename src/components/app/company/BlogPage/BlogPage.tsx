import { type BlogPost } from "@/lib/types";
import SingleBlog from "./SingleBlog";

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    date: {
      day: 20,
      month: "JAN",
    },
    image: "/placeholder.svg?height=250&width=400",
    author: "Sultan Ahmed",
    category: "Consulting",
    title: "Consulted admitting wooded is power acuteness.",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    slug: "consulted-admitting",
  },
  {
    id: "2",
    date: {
      day: 20,
      month: "JAN",
    },
    image: "/placeholder.svg?height=250&width=400",
    author: "Sultan Ahmed",
    category: "Consulting",
    title: "Grow your business strategy with business consulting.",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    slug: "grow-your-business",
  },
  {
    id: "3",
    date: {
      day: 20,
      month: "JAN",
    },
    image: "/placeholder.svg?height=250&width=400",
    author: "Sultan Ahmed",
    category: "Consulting",
    title: "Facilis dolor eques about under official,presentism.",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    slug: "facilis-dolor",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <SingleBlog key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
