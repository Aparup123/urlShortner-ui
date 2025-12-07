import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Container><Navbar /></Container>
      <Container><Hero /></Container>
    </div>
  );
}
