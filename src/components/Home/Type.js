import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Fullstack Developer",
                    "UI/UX Designer",
                    "Passionate Coder",
                    "Love to learn new Coding Skills",
                    "Keep on learning and earning",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
