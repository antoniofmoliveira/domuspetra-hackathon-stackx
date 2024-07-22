"use client";
import SpeechsBlock from "./speechs";
import ConsultancysBlock from "./consultancys";
import TrainingsBlock from "./trainings";
import ProfileBlock from "./profile";
import RecordsBlock from "./records";
import Carousel from "@/app/components/Carousel";
import Video from "@/app/components/video";
import { useRef } from "react";

// TODO reabilitar records

export default function LandingPagee() {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div>
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

      <div>
        <Carousel />
        <SpeechsBlock />
        <Video />
        <ConsultancysBlock />
        <TrainingsBlock />
        <ProfileBlock />
        {/* <RecordsBlock /> */}
      </div>
    </div>
  );
}
