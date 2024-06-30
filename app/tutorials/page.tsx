import PostsRouter from "./router";
import PostItemCard from "@/shared/components/PostItemCard";

export default function PostsPage() {
  return (
    <div>
      {PostsRouter.map((post, index) => (
        <PostItemCard key={post?.title} index={index} {...post} />
      ))}
    </div>
  );
}
