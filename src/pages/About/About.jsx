import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="text-4xl font-medium lg:text-5xl text-white">
          Front-End Developer, Innovator, Learner
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Text on Left Side */}
          <div className="relative space-y-4 order-1 sm:order-none">
            <p>
              Hello! I am{" "}
              <span className="font-bold">D Suryanarayana Reddy</span>, a
              passionate front-end developer from Sindhanur, Karnataka. I
              specialize in building interactive and modern web applications
              using HTML, CSS, JavaScript, React, and Tailwind CSS.
            </p>

            <p>
              <strong>EXPERIENCE:</strong> I have been working at{" "}
              <strong>Cognizant</strong> for the past 11 months as a Front-End
              Developer. During this time, I:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Designed and developed responsive user interfaces using HTML,
                CSS, and Tailwind CSS, ensuring seamless performance across
                devices and browsers. Built interactive UI components with React
                and JavaScript, improving usability and user engagement.
                Collaborated with the UI/UX team to translate design mockups
                into pixel-perfect front-end implementations. Optimized
                component structure and styling for scalability and
                maintainability using reusable React components and
                utility-first CSS.
              </li>
            </ul>

            <blockquote className="border-l-4 border-gray-300 pl-4 mt-6">
              <p>
                With a strong foundation in front-end development and a desire
                to build impactful digital experiences, I strive to contribute
                meaningfully to modern web development.
              </p>
              <div className="mt-4 space-y-2">
                <cite className="block font-medium text-white">
                  D Suryanarayana Reddy
                </cite>
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 w-fit"
                    src={OlovaLogo}
                    alt="Logo"
                    height="20"
                    width="auto"
                  />
                  <span>Frontend Developer</span>
                </div>
              </div>
            </blockquote>
          </div>

          {/* Image on Right Side */}
          <div className="relative mb-6 sm:mb-0 order-2 sm:order-none">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="profile"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
