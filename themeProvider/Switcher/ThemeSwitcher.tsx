"use client";

import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Expand
      style={{ transform: "scale(1.7)", marginRight: "3rem" }}
      duration={500}
      placeholder={"Toggle Theme"}
      toggled={theme === "light" ? false : true}
      onToggle={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    />
  );
}

export default ThemeToggle;
