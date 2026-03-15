import type { NextPage } from "next";
import Head from "next/head";
import { CallToAction } from "../components/landing/CallToAction";
import { CodeExampleSection } from "../components/landing/CodeExampleSection";
import { DocumentationPreview } from "../components/landing/DocumentationPreview";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { HeroSection } from "../components/landing/HeroSection";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Shell } from "../components/layout/Shell";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Isotrapper | Spatial UI Toolkit</title>
        <meta
          name="description"
          content="Isotrapper is a developer-first platform for building trap-based interactions in modern React applications."
        />
      </Head>

      <Shell>
        <Navbar />
        <main>
          <HeroSection />
          <DocumentationPreview />
          <FeaturesSection />
          <CodeExampleSection />
          <CallToAction />
        </main>
        <Footer />
      </Shell>
    </>
  );
};

export default Home;
