// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen ">
      <Container>
        <Header />

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
          <Link
            className="w-full h-full object-cover object-center overflow-hidden rounded-xl"
            href="#"
          >
            <Image
              className="group-hover:scale-105 transition"
              src="/images/img1.png"
              width={1200}
              height={720}
              alt="Título do post"
              priority
            />
          </Link>

          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-slate-600 block text-sm/tight"
              dateTime="2025-04-20"
            >
              20/04/2025 10:00
            </time>
          </div>

          <PostHeading as="h1" url="#">
            Rerum, vel ex? Impedit ullam harum blanditiis mollitia?
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat.{" "}
          </p>
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
