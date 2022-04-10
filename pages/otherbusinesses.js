import React from "react"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/navigationbar"
import Footer from "../components/footer"
import BusinessLayout from "../components/businesslayout"


{/* Image path object array currently in progress but has to be put on hold for a little  
let testImages = [
    { src: "/../public/Logos/browsbybec.jpg" },
    { src: "/../public/Logos/letsgetlashed.jpg" },
    { src: "/../public/Logos/youandeye.jpg" }
]
*/}



export default function otherbusinesses() {
    return (
        <div>
            <Head>
                <title>Clarity By James Henderson Hairdressing</title>
            </Head>
            <Navbar />
            <section className="body-font animate-fade-in-down">
                <div className="md:container px-5 py-32 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="lg:text-5xl text-4xl font-medium title-font mb-10 text-gray-900 tracking-widest font-italianno tracking-wider">Clarity Beauty Lounge</h1>
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-justify text-base font-gayathri">The Clarity beauty lounge has been designed to take you to another place. It’s peaceful atmosphere and visionary design will have you relaxed within minutes of arriving. The beautiful large windows open up the space and have you feeling apart of the big wide world. The stunning glow of the natural sunlight instantly has you at the gateway to heaven. The Clarity beauty lounge is comprised of Adelaide beauty businesses that all take beauty to the next level. Each business has been hand picked by James to ensure the highest quality of work is being produced. These businesses not only take the upmost pride in their profession but also have a passion for ensuring all of their clients are looked after with heartfelt care. Please take a moment to become familiar with these local Adelaide businesses that have so lovingly been selected to have residency at the Clarity beauty lounge.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 grid-cols-1">
                        <BusinessLayout 
                            src="/Logos/letsgetlashed.jpg" 
                            heading="Let’s Get Lashed" 
                            heading2="Khiara - @letsgetlasheddd" 
                            body = "Khiara is the face behind Let’s Get Lashed.  She has owned her own lash and brow business for 5 years and still has the same passion as day 1. She specialises in all lash extension services including classics, hybrids and volumes, you name it she can do it. She also has you covered for your lash lifts and tints.
                            Stand out with beautiful brows. Khiara is also skilled in brow waxing and takes pleasure in creating the perfect shape to suit you. With laminations being a hot trend she can give you the bold brows you always dreamed of and tops it of with a hybrid tint giving you the perfect definition. To book in with Khiara click on the link in her Instagram bio " 
                            instalink="https://instagram.com/letsgetlasheddd?utm_medium=copy_link"
                        />
                        <BusinessLayout 
                            src="/Logos/youandeye.jpg" 
                            heading="You and Eye Beauty" 
                            heading2="Tiffany - @youandeye.beauty_" 
                            body = "With years of experience under her belt, Tiffany is well experienced and trained to help all the lovely ladies of adelaide feel the best they can in their own skin. 
                            Passionate about health, beauty and helping all women feel beautiful, Tiffany has hand-chosen all her lash products personally, and uses only the highest quality products possible.
                            Having run her own successful lash business for years, Tiffany knows the importance of offering after-hour services - which she is happy to offer to all you gorgeous girls.
                            We can’t wait for you all to meet Tiffany; and to book in for your next set of gorgeous lash extensions with one of the best in the industry! She will be working at Clarity on Thursdays and Saturdays and is now taking booking for March the 3rd and the 5th. 
                            Head over to her page @youandeye.beauty_ for a follow and and have a look at her amazing work. To make an appointment please DM" 
                            instalink="https://instagram.com/youandeye.beauty_?utm_medium=copy_link"
                        />
                        <BusinessLayout 
                            src="/Logos/browsbybec.jpg" 
                            heading="Brows by Bec" 
                            heading2="Bec - @brows_bybec" 
                            body = "Brows by Bec offers Cosmetic Tattooing services. This includes the Ombré Brow technique, Feather touch Brows (Microblading) and the Combination Brow technique.
                            Bec has been a Cosmetic eyebrow Tattoo specialist for almost 2.5 years now. She has a passion for all things beauty and loves transforming & enhancing brows. 
                            Bec takes pride in ensuring each set of brows is personalised for each person’s face shape and features through every appointment. She completes this through pre drawing each set of brows and engaging with her clientele to choose the perfect colour to match their brow hairs and facial features. Whether a natural enhancement or a bold brow is your preference, Bec can create a fabulous semi permanent set of brows! All bookings can be made via Instagram" 
                            instalink="https://instagram.com/brows_bybec?utm_medium=copy_link"
                        />
                        <BusinessLayout 
                            src="/Logos/beautybybridie.jpg" 
                            heading="Beauty by Bridie" 
                            heading2="Bridie - beautybybridie" 
                            body = "Bridie established Beauty by Bridie when she was 16 years old. She has been working as a professional makeup artist in the industry for over 7 years. 
                            Beauty by Bridie is a Wild and Organic, #eco-conscious, #sustainable, #cleanbeauty business. Bridie uses all #organic, #vegan products in her kit and is a stockist for @inikaorganic where she has the skincare and makeup lines available for purchase. 
                            Beauty by Bridie is not just limited to makeup. Her services include:<br/><br/>
                            - Professional Makeup Applications <br/>
                            - Hair Styling <br/>
                            - Bridal Parties <br/>
                            - 1:1 Lessons <br/>
                            - Aspiring MUA Lessons <br/>
                            - Organic Facials <br/>
                            - Intuitive Massage <br/>
                            - Intuitive Movement & Meditation Classes <br/>
                            - Personalised Organic Artworks (painted with berries, ochre & other naturally derived plant materials) <br/>
                            - Adolescent Youth Mentoring and Empowerment Programs<br/><br/>
                            Bridie purpose is to work with likeminded souls and help them to remember their power. To connect them to their inner goddess and inspire others to be the best version of themselves and chase their dreams and aspirations. Bridie has been working with youth for over 5 years inspiring them to do just that. 
                            Not only will you receive your beautiful pampering treatment with Bridie, you will also leave feeling refreshed, recharged and held in a space of unconditional love, joy and deep connection" 
                            instalink="https://instagram.com/beautybybridie?utm_medium=copy_link"
                            />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}