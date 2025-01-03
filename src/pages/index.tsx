import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/home/layout";
import Hero from "@/components/home/Hero";
import FlashDeals from "@/components/home/Flashdeals";
import Recommended from "@/components/home/Recomended";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export default function Home() {
  return (
    <Layout>
      <Hero />
      <FlashDeals/>
      <Recommended/>
    </Layout>
  );
}
