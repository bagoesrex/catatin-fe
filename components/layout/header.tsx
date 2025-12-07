import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Catat<span className="text-blue-700">In</span>
        </h1>
        <nav className="space-x-3">
          <Button
            asChild
            variant={"ghost"}
            className="rounded-md px-4 py-2 text-gray-600 hover:bg-blue-400/10"
          >
            <Link href="/auth/register">Masuk</Link>
          </Button>
          <Button
            asChild
            className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
          >
            <Link href="/auth/register">Daftar Gratis</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
