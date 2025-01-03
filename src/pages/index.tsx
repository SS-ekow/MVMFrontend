
import Layout from "@/components/home/layout";
import Hero from "@/components/home/Hero";
import FlashDeals from "@/components/home/Flashdeals";
import Recommended from "@/components/home/Recomended";


 

 
export default function Home() {
  return (
    <Layout>
      <Hero />
      <FlashDeals/>
      <Recommended/>
    </Layout>
  );
}
