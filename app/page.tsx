import { Experience, Footer, Header, Hero } from "./sections";
import { Offer } from "./sections/offer";

export default function Home() {
  return (
    <>
      <div className="lg:max-w-6xl container mx-auto flex flex-col min-h-screen py-8">
        <Header />
        <main className="pl-3 py-20">
          <Hero />
          <Offer className="py-10" />
          <Experience className="py-10" />
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
