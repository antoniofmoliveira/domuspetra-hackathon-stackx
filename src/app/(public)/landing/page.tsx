import Cards from "@/app/components/cards";
import Link from "next/link";
import SpeechsBlock from "./speechs";
import ConsultancysBlock from "./consultancys";
import TrainingsBlock from "./trainings";
import ProfileBlock from "./profile";
import RecordsBlock from "./records";
import Carousel from "@/app/components/Carousel";
export default async function LandingPage() {
  return (
    <div>
      <Carousel />
      {/*  */}
      <SpeechsBlock />
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
