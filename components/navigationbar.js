import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link"
import Image from 'next/image'


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="fixed z-10">
			<nav className=" shadow-sm fixed w-full z-10 bg-clarityGold filter drop-shadow-lg">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10 md:mx-10  justify-between w-full">
							<div className="justify-center items-center flex-shrink-0">
								<div className="">
									<Image src="/logo.png" width={100} height={100} priority />
								</div>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4 font-gayathri font-bold">
									<Link href="/">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-3 py-2 rounded-md text-2xl">Home</a>
									</Link>
									<Link href="">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-3 py-2 rounded-md text-2xl"> Services </a>
									</Link>
									<Link href="pricing">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-3 py-2 rounded-md text-2xl"> Pricing </a>
									</Link>
									
									<Link href="">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-3 py-2 rounded-md text-2xl"> Contact Us </a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-buttonGold inline-flex items-center justify-center p-2 rounded-md text-white focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref}className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 font-gayathri">
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									About us
								</Link>
								<Link
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>
								<Link
									href="/pricing"
									activeClass="pricing"
									to="/pricing"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer  text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Pricing
								</Link>
								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact us
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}