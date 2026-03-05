import AnimatedAboutSection from "@/components/AnimatedAboutSection";
import AnimatedJournalSection from "@/components/AnimatedJournalSection";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedValuesSection from "@/components/AnimatedValuesSection";
import Features from "@/components/Features";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex w-full grow flex-col items-center justify-between bg-white">
      <Header />
      <Features />
      <AnimatedValuesSection />
      <AnimatedAboutSection />
      <AnimatedJournalSection />
      <AnimatedSection />
      <section className="bg-theme-300 flex w-full flex-col items-center gap-8 px-5 py-10 md:py-20 xl:py-30">
        <h3 className="font-radio-canada-big text-center text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
          Ready to operationalize your sustainability goals?
        </h3>
        <Button className="h-auto rounded-none p-4 text-[14px] font-medium">
          Request a demo
        </Button>
      </section>
    </main>
  );
}
