import Link from "next/link";
import PostsRouter from "./router";

export default function PostsPage() {
  return (
    <div>
      这是首页
      {PostsRouter.map(post => (
        <div key={post.path}>
          <Link href={`/posts/${post.path}`}>
            <div>
              <p>{post.title}</p>
              <p>{post.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
