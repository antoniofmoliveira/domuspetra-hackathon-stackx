import SpeechsBlock from "./speechs";
import ConsultancysBlock from "./consultancys";
import TrainingsBlock from "./trainings";
import ProfileBlock from "./profile";
import RecordsBlock from "./records";
import Video from "@/app/components/Video";
import MainVideo from "@/app/components/MainVideo";
import CardCarousel from "@/app/components/CardCarousel";
import { getLatestArticles } from "@/lib/db";
import ContactSection from "@/app/components/ContactSection";

export default async function LandingPagee() {
  return (
    <div>
      <MainVideo />
      <div>
        <CardCarousel articles={await getLatestArticles()} />
        <SpeechsBlock />
        <Video />
        <ConsultancysBlock />
        <TrainingsBlock />
        <ProfileBlock />
        <RecordsBlock />
        <ContactSection />
      </div>
    </div>
  );
}
