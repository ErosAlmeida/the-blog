

// page.tsx (server) -> menu.tsx (server) -> link (client)

import clsx from "clsx";

export default async function HomePage() {
  console.log('HomePage');

  return (
      <h1
        className={clsx(
          'text-6xl',
          'font-bold',
          'text-blue-500',
          'hover:text-blue-50',
          'hover:bg-blue-500',
          'transition',
          'duration-1000',
        )}

      >
        Texto no meu h1
      </h1>
    );
}
