import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WaterDropGrid from "@/components/WaterDropGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <WaterDropGrid />
    <h1 className="mt-6">
      code <a href="https://github.com/Hakuprogramming/animejs.git" className="underline decoration-sky-500" >here</a>
    </h1>
    </>
  );
}


