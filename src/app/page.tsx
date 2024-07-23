import Header from "./components/Header";
import LandingPage from "./(public)/landing/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-2 w-[95%]">
        <div className="z-10 w-[95%] max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <LandingPage />
        </div>
      </main>
    </>
  );
}
