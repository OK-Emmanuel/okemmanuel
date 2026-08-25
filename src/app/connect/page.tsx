import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ConnectIntents from "@/components/connect/ConnectIntents";
import ConnectForm from "@/components/connect/ConnectForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Connect — O.K. Emmanuel",
  description:
    "Work with me, invite me to speak, collaborate, learn, support an initiative, or start a strategic conversation.",
};

export default function ConnectPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Connect"
          title="Let's find the right way to work together."
          variant="beam"
        />
        <ConnectIntents />
        <ConnectForm />
      </main>
      <Footer />
    </>
  );
}
