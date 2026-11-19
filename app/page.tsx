import Image from "next/image";

const works = [
  {
    category: "Space Installation / Print",
    title: "Tears Are Freedom's Rain",
    page: "03",
    year: 2025,
  },
  {
    category: "Website",
    title: "How to Conceal Your Digital Face?",
    page: "07",
    year: 2025,
  },
  {
    category: "Web Game",
    title: "After School",
    page: "11",
    year: 2024,
  },
  {
    category: "Typeface / Poster",
    title: "Trauma Type",
    page: "16",
    year: 2024,
  },
  {
    category: "Board Game / Print",
    title: "What We Talk About When We Talk About Grades?",
    page: "21",
    year: 2024,
  },
  {
    category: "Performance",
    title: "Wordventure",
    page: "26",
    year: 2024,
  },
  {
    category: "Space Installation / Print",
    title: "Parasitic Soul",
    page: "31",
    year: 2024,
  },
  {
    category: "Video Installation",
    title: "Balloons? Currency? or Cluster Bombs?",
    page: "37",
    year: 2024,
  },
  {
    category: "Sound Installation / Print",
    title: "Sounds of Tear",
    page: "39",
    year: 2024,
  },
  {
    category: "Photography",
    title: "Untitled Collection",
    page: "43",
    year: 2024,
  },
] as const;

export default function Home() {
  return (
    <main className="flex min-h-full justify-center bg-page px-6 py-10 sm:px-10 sm:py-14">
      <div className="flex w-full max-w-[880px] flex-col gap-6">
        <section className="flex min-h-[400px] flex-col justify-between bg-card px-8 py-8 sm:min-h-[440px] sm:px-10 sm:pt-9 sm:pb-8">
          <header className="grid grid-cols-[8.75rem_minmax(0,1fr)_auto] items-start gap-x-3 sm:grid-cols-[13.5rem_minmax(0,1fr)_auto] sm:gap-x-6">
            <h1 className="font-serif text-[30px] leading-none font-medium text-ink italic sm:text-[34px]">
              Kelly
            </h1>
            {/* text-accent */}
            <p className="font-serif text-[30px] leading-none text-ink sm:text-[34px]">
              Portfolio
            </p>
            <Image
              src="/kelly.png"
              alt="Portrait of Kelly"
              width={92}
              height={93}
              priority
              className="h-[78px] w-[78px] object-cover sm:h-[88px] sm:w-[88px]"
            />
          </header>

          <footer className="grid grid-cols-[8.75rem_minmax(0,1fr)_auto] items-end gap-x-3 text-[12px] leading-none text-muted sm:grid-cols-[13.5rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:text-[14px]">
            <p>Graphic Designer</p>
            <p>Based in Accra - Ghana</p>
            <a
              href="mailto:hello@kelly"
              className="justify-self-end text-muted no-underline"
            >
              kelly@gmail.com
            </a>
          </footer>
        </section>

        <section className="flex min-h-[400px] flex-col justify-between bg-card px-8 py-8 sm:min-h-[440px] sm:px-10 sm:pt-9 sm:pb-8">
          <ol className="flex flex-col gap-[6px]">
            {works.map((work, index) => {
              const current = work.year === 2025;
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={work.title}
                  className="grid grid-cols-[8.75rem_minmax(0,1fr)_2rem] items-baseline gap-x-3 sm:grid-cols-[13.5rem_minmax(0,1fr)_2.5rem] sm:gap-x-6"
                >
                  <span className="text-[13px] leading-[1.45] text-muted italic sm:text-[14px]">
                    {work.category}
                  </span>
                  <p
                    className={`text-[14px] leading-[1.45] sm:text-[15px] ${
                      current ? "text-ink" : "text-ink"
                    }`}
                  >
                    <span className="[font-variant-numeric:oldstyle-nums]">
                      {number}.{" "}
                    </span>
                    {work.title}
                  </p>
                  <span className="justify-self-end text-[13px] leading-[1.45] text-muted italic [font-variant-numeric:oldstyle-nums] sm:text-[14px]">
                    {work.page}
                  </span>
                </li>
              );
            })}
          </ol>

          <footer className="flex items-center justify-center gap-8 pt-10 text-[13px] text-ink sm:text-[14px]">
            <span className="inline-flex items-center gap-[6px]">
              <span className="size-[7px] rounded-full bg-accent" />
              2025
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span className="size-[7px] rounded-full bg-ink" />
              2022 - 2024
            </span>
          </footer>
        </section>
      </div>
    </main>
  );
}
