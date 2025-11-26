// page.tsx (server) -> menu.tsx (server) -> link (client)

import PostsListAdmin from "@/components/admin/PostsListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-static";

export default async function HomePage() {
  return (
    <Suspense fallback={<SpinLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
