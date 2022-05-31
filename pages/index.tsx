import Footer from "@components/Footer";
import Form from "@components/Form";
import Navbar from "@components/Navbar";
import Features from "@components/Sections/Features";
import Intro from "@components/Sections/Intro";
import Productivity from "@components/Sections/Productivity";
import Reviews from "@components/Sections/Reviews";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Fylo landing page with dark theme and features grid
        </title>
        {/* Just wanted to add a description, ain't gonna bother writing this out */}
        <meta name="description" content="Fylo" />
      </Head>
      <Navbar />
      <main>
        <Intro />
        <Features />
        <Productivity />
        <Reviews />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default Home;
