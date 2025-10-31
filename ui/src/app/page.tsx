import Image from "next/image";
import Dashboard from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="min-h-screen w-full max-w-7xl flex-col py-16 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="text-4xl font-bold pb-16">Frag Vera</h1>
        <Dashboard />
      </main>
    </div>
  );
}
