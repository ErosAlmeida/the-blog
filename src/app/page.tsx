// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen ">
      <Container>
        <Header />

        <section>
          <Link href="#">
            <Image
              src="/images/img1.png"
              width={1200}
              height={720}
              alt="Titulo do post"
            />
          </Link>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            possimus neque ea consectetur, accusamus veniam voluptatum expedita
            nemo deserunt alias, ut, error quos. Odio et nostrum cumque sint,
            temporibus minima.
          </div>
        </section>

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
