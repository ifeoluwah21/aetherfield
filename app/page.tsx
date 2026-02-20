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
        <div className="relative z-10 mx-auto flex max-w-310 flex-col gap-4 xl:flex-row">
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
      <section className="mx-auto max-w-245 px-5 py-10 md:py-20">
        <article className="bg-theme-300 flex flex-col gap-6 rounded-3xl p-5 md:flex-row md:gap-10">
          <Image
            src={"/Image-1.svg"}
            alt="Group of colleagues greeting each other in a stylized blue duotone treatment"
            width={498}
            height={280}
            className="w-full"
          />
          <div className="flex flex-col gap-6 md:justify-center">
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
                Why Acme Inc chose Aetherfield
              </h4>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
                With fragmented data and growing reporting pressure, Acme turned
                to Aetherfield to streamline their ESG workflows. The result?
                Faster decisions, fewer spreadsheets, and 34% more coverage.
              </p>
            </div>
            <Button className="h-auto rounded-none p-3 md:w-max">
              Read case study
            </Button>
          </div>
        </article>
      </section>
      <section className="relative flex w-full flex-col gap-6 px-5 md:gap-10">
        <h3 className="font-radio-canada-big text-center text-2xl -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
          From the journal
        </h3>
        {/* <Image
          src={"/Sticker 2.svg"}
          alt=""
          height={154}
          width={400}
          className="absolute -top-27.25 -left-71.75"
        /> */}
        <div className="divide-theme-200 border-theme-200 mx-auto flex max-w-155 flex-col gap-6 divide-y border-t">
          <article className="flex flex-col gap-4 py-6 md:flex-row">
            <Image
              src={"/journal-1.svg"}
              width={335}
              height={203}
              alt="Sheer white fabric billowing gently in a bright blue sky"
              className="aspect-[1.65] w-full object-cover md:w-41.25"
            />
            <div className="flex grow flex-col gap-2">
              <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
                How to Build a Climate-Ready Data Stack
              </h4>
              <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
                <span>Insights </span>
                <span>. </span>
                <span>4 mins</span>
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-4 py-6 md:flex-row">
            <Image
              src={"/journal-2.svg"}
              width={335}
              height={203}
              alt="Sheer white fabric billowing gently in a bright blue sky"
              className="aspect-[1.65] w-full object-cover md:w-41.25"
            />
            <div className="flex grow flex-col gap-2">
              <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
                Sustainability Isn&apos;t a Side Project: Making Impact
                Operational
              </h4>
              <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
                <span>Strategy </span>
                <span>. </span>
                <span>7 mins</span>
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-4 py-6 md:flex-row">
            <Image
              src={"/journal-3.svg"}
              width={335}
              height={203}
              alt="Sheer white fabric billowing gently in a bright blue sky"
              className="aspect-[1.65] w-full object-cover md:w-41.25"
            />
            <div className="flex grow flex-col gap-2">
              <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
                Inside the Aetherfield Model: How We Turn Data Into Action
              </h4>
              <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
                <span>Insights </span>
                <span>. </span>
                <span>5 mins</span>
              </p>
            </div>
          </article>
          <Button className="h-auto rounded-none p-3 md:mx-auto md:w-max">
            View all articles
          </Button>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 md:py-20 xl:py-30">
        <div className="flex flex-col gap-8 md:flex-row md:gap-4">
          <Image
            src={"/Elliot Williams.svg"}
            alt="Stylized blue duotone portrait of a person facing the camera with arms crossed"
            width={335}
            height={383}
            className="w-full"
          />
          <div className="flex flex-col gap-6 md:justify-center md:gap-10 md:px-10 xl:gap-14 xl:px-26.25">
            <span className="text-theme-200 text-5xl font-extrabold md:text-8xl">
              &quot;
            </span>
            <p className="font-radio-canada-big text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
              We finally moved past spreadsheets and guesswork. Now we have real
              data to guide real decisions.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-radio-canada-big text-[20px] leading-[100%] font-medium -tracking-[0.4px]">
                Elliot Williams
              </p>
              <p className="font-source-serif-pro text-theme-100 text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
                Head of Sustainability, Flux Materials
              </p>
            </div>
          </div>
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
