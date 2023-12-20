"use client";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: true,
});

const AnimatedCursorCustom = () => {
  return (
    <div className="text-black dark:text-white">
      <AnimatedCursor
        innerSize={0}
        outerSize={20}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".cursor-pointer",
        ]}
      />
    </div>
  );
};

export default AnimatedCursorCustom;
