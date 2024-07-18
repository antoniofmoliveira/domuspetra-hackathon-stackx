import Cards from "@/app/components/cards";
import Link from "next/link";
import SpeechsBlock from "./speechs";
import ConsultancysBlock from "./consultancys";
import TrainingsBlock from "./trainings";
import ProfileBlock from "./profile";
import RecordsBlock from "./records";
export default async function Landing() {
  return (
    <div>
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
