

// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from 'react';
import { PostsList } from '@/components/PostsList';


export default async function HomePage() {


  return (
    <div>

      <header>
        <h1 className='text-6xl font-bold text-center py-8'>AQUI É A HEADER</h1>
      </header>

      <Suspense fallback ={<SpinLoader/>}>
        <PostsList/>
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>

    </div>
    );
}
