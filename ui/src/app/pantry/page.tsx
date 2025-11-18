import Button from '@/components/button/button';
import PantryList from '@/components/food/pantry-list';
import AddToPantry from '@/components/food/pantry-add';

export default function Pantry() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="min-h-screen w-full max-w-7xl flex-col py-16 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="text-4xl font-bold pb-16">Vorratskammer</h1>
        <Button href="/" title="Vorratskammer verlassen" />
        <p className="pb-8">Verwalte deine Vorratskammer</p>
        <AddToPantry />
        <PantryList />
      </main>
    </div>
  );
}
