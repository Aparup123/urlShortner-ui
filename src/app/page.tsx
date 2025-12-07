import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="overflow-hidden relative h-screen">
      <Container className="mt-7 "><Navbar /></Container>
      <Container><Hero /></Container>
    </div>
  );
}
