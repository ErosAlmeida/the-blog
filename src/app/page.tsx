

// page.tsx (server) -> menu.tsx (server) -> link (client)

import { SpinLoader } from "@/components/SpinLoader";


export default async function HomePage() {


  return (
    <div>
      <SpinLoader/>
    </div>
    );
}
