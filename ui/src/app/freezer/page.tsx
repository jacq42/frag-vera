import Button from '@/components/button/button';
import FreezerList from '@/components/food/freezer-list';

export default function Freezer() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="min-h-screen w-full max-w-7xl flex-col py-16 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="text-4xl font-bold pb-16">Tiefkühler</h1>
        <Button href="/" title="Tiefkühler schließen" />
        <p className="pb-8">Verwalte deinen Tiefkühler</p>
        <FreezerList />
      </main>
    </div>
  );
}
