import PostItemCard from "@/shared/components/PostItemCard";

import PostsRouter from "./router";

export default function PostsPage() {
  return (
    <div>
      {PostsRouter.map((post, index) => (
        <PostItemCard key={post?.title} index={index} {...post} />
      ))}
    </div>
  );
}
