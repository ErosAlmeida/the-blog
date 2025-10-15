// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";

import { PostFeatured } from "@/components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <div className="text-slate-900 bg-slate-100 min-h-screen ">
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
          <PostFeatured />

          <PostsList />
        </Suspense>
      </div>
    </>
  );
}
