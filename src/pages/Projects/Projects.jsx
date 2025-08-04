/* eslint-disable react/prop-types */
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import EasnestImg from "@/assets/images/easnest.jpg";
import MultimeterImg from "@/assets/images/multimeter.jpg";
import AIAssistantImg from "@/assets/images/ai-assistant.jpg";

const projects = [
  {
    title: "Easnest: A Roommate Living Organizer",
    description:
      "Easnest is a centralized platform designed to streamline the shared living experience for roommates. It brings together essential modules such as grocery lists, expense tracking, bill reminders, chore scheduling, document storage, and group chat functionalities. The application solves real-world coordination problems among roommates by offering an all-in-one solution. It improves communication, boosts accountability, and simplifies task distribution.",
    src: EasnestImg,
    color: "#4f46e5",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Multimeter Display Glasses",
    description:
      "Multimeter Display Glasses are an innovative wearable tech solution to enhance electrical safety during testing. These glasses feature integrated sensors and a mini display that project real-time multimeter readings directly onto the lenses. This ensures electricians and engineers maintain their focus on the equipment while getting instant feedback on voltage or current levels.",
    src: MultimeterImg,
    color: "#10b981",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "AI Smart Class Assistant",
    description:
      "The AI Smart Class Assistant is an AI-driven tool developed to enhance classroom experiences through automation and real-time insights. Though the code is not available, the concept includes AI-based attendance tracking, automated note summarization, and live quiz evaluation. It integrates with digital classrooms and adapts to various teaching styles.",
    src: AIAssistantImg,
    color: "#f59e0b",
    githubLink: "",
    liveLink: "",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Left image */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 bg-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
