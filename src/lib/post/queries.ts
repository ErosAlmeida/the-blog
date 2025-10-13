import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic()
);

export const findAPostBySlugCached = cache(
  async (slug: string) => await postRepository.findBySlug(slug)
);

export const findAPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id)
);
