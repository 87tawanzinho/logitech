import Image from "next/image";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <div className="w-8/12">
        <NavBar />
        <FirstSection />
      </div>
    </main>
  );
}
