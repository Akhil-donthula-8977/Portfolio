import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "flask",
  "sklearn",
  "redis",
  "mongodb",
  
];
export function SkillIconCloud() {
  return (
    <div
      className="relative  h-full hidden sm:flex w-full max-w-[36rem]  bg-opacity-50 items-center justify-center overflow-hidden rounded-lg  px-22 pb-22 pt-10"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.5)" }}
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
