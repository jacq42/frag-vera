import Button from '@/components/button/button';
import RecipeList from '@/components/recipe/recipe-list';

export default function Recipe() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="min-h-screen w-full max-w-7xl flex-col py-16 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="text-4xl font-bold pb-16">Kochbuch</h1>
        <Button href="/" title="Kochbuch schließen" />
        <p className="pb-8">Organisiere deine Lieblingsrezepte im übersichtlichen Rezeptmanager. Kategorisiere, bearbeite und erweitere deine Sammlung nach Belieben.</p>
        <RecipeList />
      </main>
    </div>
  );
}
