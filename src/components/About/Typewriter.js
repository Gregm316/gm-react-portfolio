import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello World!",
          "My name is Greg.",
          "I am a full stack developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;