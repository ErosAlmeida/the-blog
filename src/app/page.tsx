// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";

import { PostFeatured } from "@/components/PostFeatured";
import { ClientComponent } from "@/components/ClientComponet";
import { ServerComponent } from "@/components/ServerComponent";

export default async function HomePage() {
  return (
    <>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>

      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
