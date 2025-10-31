import { findAllPostAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import clsx from "clsx";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div className={clsx("py-2 bg-amber-300")} key={post.id}>
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
