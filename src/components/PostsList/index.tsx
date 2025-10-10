import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostCoverImage
              linkProps={{
                href: "/post/asdfasdf",
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: "/images/bryen_9.png",
                alt: "Alt da imagem",
                priority: true,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
