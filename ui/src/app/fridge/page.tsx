import Button from '@/components/button/button';
import FridgeList from '@/components/food/fridge-list';
import AddToFridge from '@/components/food/fridge-add';

export default function Fridge() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="min-h-screen w-full max-w-7xl flex-col py-16 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="text-4xl font-bold pb-16">Kühlschrank</h1>
        <Button href="/" title="Kühlschrank schließen" />
        <p className="pb-8">Verwalte deinen Kühlschrank</p>
        <AddToFridge />
        <FridgeList />
      </main>
    </div>
  );
}
