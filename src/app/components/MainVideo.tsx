"use client";

import { useRef } from "react";

/**
 * The main video component.
 *
 * This component displays a video player with a full-width and auto-height.
 * It also includes a shadow effect and can be muted.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function MainVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <video
        ref={ref}
        className="w-full h-auto rounded-lg shadow-lg border-hidden shadow-zinc-400  mt-6 mb-6  hover:shadow-blue-200"
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
