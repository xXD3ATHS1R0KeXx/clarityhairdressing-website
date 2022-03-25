import Head from "next/head";
import HeroSection from "../components/herosection";
import Navbar from "../components/navigationbar";
import Aboutsection from "../components/aboutsection"
import Footer from "../components/footer"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Clarity By James Henderson Hairdressing</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar/>
			<HeroSection />
			<Aboutsection className="animate-fade-in-down" />
			<Footer />
		</div>
	);
}