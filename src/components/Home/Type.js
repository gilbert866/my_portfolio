import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Freelancer",
          "System Engineer",
          "Open Source Contributor",
          "AI Engineer",
          "DevOps Engineer",
            "Operating System ",
            "Operating System Development"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
