import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Passionate web developer with strong technical skills seeking a challenging and rewarding position as a Web Developer. Proven track record in personnel development, customer service excellence, and business transformation. Commited to delivering high-quality web solutions through creativity, attention to detail, and problem-solving abilities. "}
      </p>
    </div>
  );
};

export default ServiceCard;
