"use client";

import YouTube from "react-youtube";

/**
 * Video component
 *
 * @returns {JSX.Element} A component that displays a video from YouTube
 */
const Video = () => {
  const conteudo = (
    <div className=" mt-6 mb-6">
      <div className="lg:m-auto md:m-auto  w-[95%] h-auto  md:w-[95%] md:h-auto  lg:w-[560px] lg:h-auto rounded-3xl border-stone-700 text-center shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200 bg-transparent">
        <YouTube
          videoId="piQT3aKXg-k"
          className="w-[95%] h-auto  md:w-[95%] md:h-auto  lg:w-[560px] lg:h-auto rounded-3xl"
          opts={{ playerVars: { autoplay: 1 } }}
          onReady={(event: { target: { pauseVideo: () => any } }) =>
            event.target.pauseVideo()
          }
        ></YouTube>
      </div>
    </div>
  );
  return conteudo;
};

export default Video;

//
