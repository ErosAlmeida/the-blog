

// page.tsx (server) -> menu.tsx (server) -> link (client)
import clsx from 'clsx';
import { SpinLoader } from "@/components/SpinLoader";


export default async function HomePage() {


  return (
    <div>
     <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
    );
}
