import Image from "next/image";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <div className="max-w-8xl">
        <NavBar />
        <FirstSection />
      </div>
    </main>
  );
}
