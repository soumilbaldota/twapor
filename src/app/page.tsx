import { Button } from "@twapor/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr] min-h-screen">
      <aside className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm">Overview</a></li>
            <li><a href="#" className="text-sm">Reports</a></li>
            <li><a href="#" className="text-sm">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button>New Report</Button>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Card 1</h3>
            <p className="text-sm">Content for card 1.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Card 2</h3>
            <p className="text-sm">Content for card 2.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Card 3</h3>
            <p className="text-sm">Content for card 3.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
