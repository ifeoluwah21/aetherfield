import Features from "@/components/Features";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white">
      <Header />
      <Features />
    </main>
  );
}
