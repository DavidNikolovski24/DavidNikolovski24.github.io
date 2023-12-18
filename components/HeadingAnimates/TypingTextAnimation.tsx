"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingTextAnimation = ({ heading }: { heading: string }) => {
  return (
    <div
      style={{
        height: "50px",
        overflow: "hidden",
        marginBottom: "1rem",
      }}
    >
      <TypeAnimation
        sequence={[1500, heading, 1000]}
        style={{
          fontSize: "3rem",
          display: "block",
          letterSpacing: "2px",
          whiteSpace: "pre-line",
        }}
        speed={{ type: "keyStrokeDelayInMs", value: 200 }}
        cursor={false}
      />
    </div>
  );
};

export default TypingTextAnimation;
