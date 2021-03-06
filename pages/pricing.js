import Head from "next/head"
import React from "react"
import Navbar from "../components/navigationbar"
import Footer from "../components/footer"


export default function pricing() {
    return (
        <div>
            <Head>
                <title>Clarity By James Henderson Hairdressing</title>
            </Head>
            <Navbar />
            <div className="flex justify-center items-center pt-32 animate-fade-in-down">
                <h2 className="font-italianno text-4xl md:text-6xl tracking-wider">Services</h2>
            </div>
            <div>
                <ul className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 animate-fade-in-down ">
                    <li className="block_overlay font-gayathri">
                        <h3 className="text-1xl md:text-4xl font-gayathri text-center "> CUTS </h3>
                        <br />
                        <p>
                            Ladies cut and blow dry  <span className="float-right">$88</span>  <br />
                            Dry cut / wash and cut <span className="float-right">$70</span> <br />
                            Basic trim  <span className="float-right">$50</span> <br />
                            Restyle cut <span className="float-right">$110</span><br />
                        </p>
                    </li>
                    <li className="block_overlay font-gayathri">
                        <h3 className="text-1xl md:text-4xl font-gayathri text-center"> COLOURING </h3>
                        <br />
                        <p>
                            Root tint  <span className="float-right">$75</span> <br />
                            Tint short <span className="float-right">$85 </span><br />
                            Tint medium <span className="float-right">$95</span><br />
                            Tint long <span className="float-right">$105</span><br />
                            Tint extra long <span className="float-right">$115</span><br />
                            Bleach on scalp <span className="float-right">$130</span><br />
                        </p>
                    </li>
                    <li className="block_overlay font-gayathri">
                        <h3 className="text-1xl md:text-4xl text-center"> FOILING </h3>
                        <br />
                        <p>
                            1/4 Head from <span className="float-right">$85</span><br />
                            1/2 Head short <span className="float-right">$95</span><br />
                            1/2 Head medium <span className="float-right">$105</span><br />
                            1/2 Head long <span className="float-right">$115</span><br />
                            Full Head short <span className="float-right">$150</span><br />
                            Full Head medium <span className="float-right">$160</span><br />
                            Full Head long <span className="float-right">$170</span><br />
                            Extra bleach/foils <span className="float-right">$50</span><br />
                            Toner <span className="float-right">$50</span><br />
                            Zone tone <span className="float-right">$80</span><br />
                            Treatment <span className="float-right">$25</span><br />
                            Bonding treatment <span className="float-right">$40</span><br />
                        </p>
                    </li>
                    <li className="block_overlay font-gayathri">
                        <h3 className="text-1xl md:text-4xl text-center"> STYLING </h3>
                        <br />
                        <p>
                            Blowdry short <span className="float-right">$55</span><br />
                            Blowdry medium <span className="float-right">$65</span><br />
                            Blowdry long <span className="float-right">$75</span><br />
                            Blowdry extra long <span className="float-right">$85</span><br />
                            Curls/waves (no wash) from <span className="float-right">$60</span><br />
                            Upstyle <span className="float-right">$125</span><br />
                            Bridal styling from <span className="float-right">$125</span><br />
                        </p>
                    </li>
                </ul>
                <h2 className="font-italianno text-4xl md:text-6xl text-center mt-20 tracking-wider">Weft Hair Extensions</h2>
                <div>
                    <ul className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 animate-fade-in-down">
                        <li className="block_overlay font-gayathri">
                            <h3 className="text-1xl md:text-3xl font-gayathri text-center "> Full head - one colour </h3>
                            <br />
                            <p>
                                12 - 80g <span className="float-right">$575</span><br />
                                16 - 100g <span className="float-right">$850</span><br />
                                20 - 120g <span className="float-right">$975</span><br />
                                24 - 140g <span className="float-right">$1160</span><br />
                            </p>
                        </li>
                        <li className="block_overlay font-gayathri">
                            <h3 className="text-1xl md:text-3xl font-gayathri text-center"> Full head - multi tone</h3>
                            <br />
                            <p>
                                12 - 80g <span className="float-right">$625</span><br />
                                16 - 100g <span className="float-right">$900</span><br />
                                20 - 120g <span className="float-right">$1025</span><br />
                                24 - 140g <span className="float-right">$1210</span><br />
                            </p>
                        </li>
                        <li className="block_overlay font-gayathri">
                            <h3 className="text-1xl md:text-3xl font-gayathri text-center"> half head - one colour</h3>
                            <br />
                            <p>
                                16 - 50g <span className="float-right">$480</span><br />
                                20 - 60g <span className="float-right">$550</span><br />
                                24 - 70g <span className="float-right">$600</span><br />
                            </p>
                        </li>
                        <li className="block_overlay font-gayathri">
                            <h3 className="text-1xl md:text-3xl font-gayathri text-center"> half head - multi tone</h3>
                            <br />
                            <p>
                                16 - 50g <span className="float-right">$530</span><br />
                                20 - 60g <span className="float-right">$600</span><br />
                                24 - 70g <span className="float-right">$650</span><br />
                            </p>
                        </li>
                        <li className="block_overlay font-gayathri">
                            <h3 className="text-1xl md:text-3xl font-gayathri text-center"> Move Ups</h3>
                            <br />
                            <p>
                                1 row <span className="float-right">$60</span><br />
                                2 rows <span className="float-right">$110</span><br />
                                3 rows <span className="float-right">$160</span><br />
                                4 rows <span className="float-right">$210</span><br />
                            </p>
                        </li>
                        <li className="block_overlay font-gayathri">
                            <h1 className="text-1xl md:text-3xl font-gayathri text-center"> Other services</h1>
                            <br />
                            <p>
                                Colour extensions <span className="float-right">$100</span><br />
                                Toning extensions <span className="float-right">$50</span><br />
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}