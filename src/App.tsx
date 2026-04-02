import HeaderNav from "./components/HeaderNav";
import Router from "./Router/Router";

function App() {
  return (
    <main className="bg-(--color-base) text-(--color-text) p-8 flex flex-col gap-8">
      <HeaderNav />
      <div className="min-h-screen">
        <Router></Router>
      </div>
    </main>
  );
}

export default App;
