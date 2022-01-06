import Head from "next/head";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
// import WhychooseEasyBank from "../components/WhychooseEasyBank";

export default function Home() {
  return (
    <div className="  font-public">
      <Head>
        <title> EasyBank-landing-page </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeaderSection />
      {/* <WhychooseEasyBank /> */}
    </div>
  );
}
