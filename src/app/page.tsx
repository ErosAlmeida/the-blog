// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

import { PostFeatured } from "@/components/PostFeatured";

export default async function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen ">
      <Container>
        <Header />

        <Suspense fallback={<SpinLoader />}>
          <PostFeatured />
        </Suspense>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className="text-6xl font-bold text-center py-8">Footer</p>
        </footer>
      </Container>
    </div>
  );
}
