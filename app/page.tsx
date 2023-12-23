import Image from "next/image";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import { MobileContextProvider } from "./context/MobileContext";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <MobileContextProvider>
        <div className="max-w-8/12 lg:w-8/12">
          <NavBar />
          <FirstSection />
        </div>
      </MobileContextProvider>
    </main>
  );
}
