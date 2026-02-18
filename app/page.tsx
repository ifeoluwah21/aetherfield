import Features from "@/components/Features";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white">
      <Header />
      <Features />
      <section className="relative flex w-full flex-col gap-8 bg-[url(/footer-image.svg)] bg-cover bg-no-repeat px-5 py-10 md:gap-10 md:py-20 xl:py-30">
        <div className="absolute top-0 right-0 bottom-0 left-0 z-2 bg-white/85"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-source-serif-pro text-4xl font-normal -tracking-[2.56px] md:text-[64px] md:-tracking-[1.44px] xl:text-[80px] xl:-tracking-[3.2px]">
            Built for clarity
          </h2>
          <h3 className="font-radio-canada-big text-4xl font-normal -tracking-[0.72px] md:text-[64px] md:-tracking-[1.92px] xl:text-[80px] xl:-tracking-[4px]">
            Designed for action
          </h3>
        </div>
        <div className="relative z-10 flex flex-col gap-4 xl:flex-row">
          <article className="flex flex-col gap-6 rounded-3xl bg-white p-10">
            <figure>
              <Image
                src={"/Type=Pie chart.svg"}
                width={42}
                height={42}
                alt="clarity symbol"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <h4 className="font-radio-canada-big text-[20px] font-medium -tracking-[0.4px]">
                Clarity drives action
              </h4>
              <p className="font-source-serif-pro text-[20px] leading-[120%] font-normal -tracking-[0.8px]">
                We believe better decisions start with better data-measured,
                visible, and trust.
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-6 rounded-3xl bg-white p-10">
            <figure>
              <Image
                src={"/Type=System.svg"}
                width={42}
                height={42}
                alt="clarity symbol"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <h4 className="font-radio-canada-big text-[20px] font-medium -tracking-[0.4px]">
                Sustainability is a systems problem
              </h4>
              <p className="font-source-serif-pro text-[20px] leading-[120%] font-normal -tracking-[0.8px]">
                We build tools that help teams connect the dots between
                operations, impact, and accountability.
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-6 rounded-3xl bg-white p-10">
            <figure>
              <Image
                src={"/Type=Up.svg"}
                width={42}
                height={42}
                alt="clarity symbol"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <h4 className="font-radio-canada-big text-[20px] font-medium -tracking-[0.4px]">
                Progress over perfection
              </h4>
              <p className="font-source-serif-pro text-[20px] leading-[120%] font-normal -tracking-[0.8px]">
                We support real-world mommentum-helping organizations move from
                ambition to measureable change.
              </p>
            </div>
          </article>
        </div>
      </section>
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
