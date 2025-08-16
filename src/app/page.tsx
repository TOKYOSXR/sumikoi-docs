import Hero from "./components/Hero";
import Categorias from "./components/Categorias";
import Criadores from "./components/Criadores";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28">
      <Hero />
      <Categorias />
      <Criadores />
    </main>
  );  
}
