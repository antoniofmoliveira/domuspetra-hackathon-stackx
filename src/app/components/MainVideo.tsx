"use client";

import { useRef } from "react";

function MainVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <video
        ref={ref}
        className="w-full h-auto rounded-lg shadow-2xl border-hidden shadow-zinc-400  mt-6 mb-6  hover:shadow-blue-400"
        autoPlay={true}
        muted={true}
        onEnded={() => {
          ref.current!.style.display = "none";
        }}
      >
        <source type="video/mp4" src="/videos/domuspetravideo.mp4" />
      </video>
    </div>
  );
}

export default MainVideo;
