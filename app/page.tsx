import Image from "next/image";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";

export default function Home() {
  return (
    <main>
      <div className=" flex justify-center items-center">
        <NavBar />
        <FirstSection />
      </div>
    </main>
  );
}
