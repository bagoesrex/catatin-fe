import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
      <Image
        src={
          "https://otakotaku.com/asset/img/character/2022/12/megumin-638c900f86050p.jpg"
        }
        alt={"My Mine"}
        height={200}
        width={200}
      />
      <h1>My Mine</h1>
    </main>
  );
}
