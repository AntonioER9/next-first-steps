
import Link from "next/link";
//Página principal de la aplicación.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">
        Hola mundo
      </span>

      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
