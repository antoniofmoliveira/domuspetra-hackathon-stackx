import Cards from "@/app/components/cards";
import Link from "next/link";
import SpeechsBlock from "./speechs";
import ConsultancysBlock from "./consultancys";
import TrainingsBlock from "./trainings";
import ProfileBlock from "./profile";
import RecordsBlock from "./records";
import Carousel from "@/app/components/Carousel";
import Video from "@/app/components/video";
export default async function Landing() {
  return (
    <div>
      <Carousel />
      {/*  */}
      <SpeechsBlock />
      {/*  */}
      <Video/>
      {/*  */}
      <ConsultancysBlock />
      {/*  */}
      <TrainingsBlock />
      {/*  */}
      <ProfileBlock />
      {/*  */}
      <RecordsBlock />
    </div>
  );
}
