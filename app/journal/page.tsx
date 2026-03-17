import React from "react";
import Header from "./_components/Header";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./_components/AnimatedSection";
import { Journal } from "@/dal/journal";
import { BASE_API_URL } from "@/lib/utils";

export default async function JournalPage() {
  const params = new URLSearchParams({ limit: "10", offset: "0", page: "1" });
  const response = await fetch(`${BASE_API_URL}/api/journals?${params}`, {
    method: "GET",
  });
  if (!response.ok) return null;

  const data = (await response.json()) as Journal[];
  return (
    <>
      <main className="flex w-full grow flex-col items-center bg-white">
        <Header />
        <AnimatedSection journals={data} />
        <section className="bg-theme-300 mb:py-20 w-full px-5 py-10 xl:py-30">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
            <h3 className="font-radio-canada-big text-center text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
              Subscribe to Aetherfield Journal
            </h3>
            <Button className="h-auto rounded-none p-4 font-mono text-sm font-medium">
              Sign up to newsletter
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
