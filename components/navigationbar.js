import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link"
import Image from 'next/image'

// Component that holds the code for the navbar any chanages will need to be made here

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="fixed z-10">
			<nav className=" shadow-sm fixed w-full z-10 bg-clarityGold filter drop-shadow-lg">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10 md:mx-10  justify-between w-full">
							<div className="justify-center items-center flex-shrink-0">
								<Image src="/logo.png" width={100} height={100} priority/>
							</div>
							{/* Desktop navbar code */}
							<div className="hidden lg:block">
								<div className="ml-10 flex items-baseline space-x-2 font-gayathri font-bold">
									<Link href="/">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-1 py-2 rounded-md text-base lg:px-3 lg:text-2xl">Home</a>
									</Link>
									<Link href="/pricing">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-1 py-2 rounded-md text-base lg:px-3 lg:text-2xl">Services</a>
									</Link>
									<Link href="/otherbusinesses">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-1 py-2 rounded-md text-base lg:px-3 lg:text-2xl">Clarity Beauty Lounge</a>
									</Link>
									<Link href="/">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-1 py-2 rounded-md text-base lg:px-3 lg:text-2xl">Gallery</a>
									</Link>
									<Link href="/">
										<a className="cursor-pointer hover:bg-buttonGold text-offwhite px-1 py-2 rounded-md text-base lg:px-3 lg:text-2xl">Book Now</a>
									</Link>
								</div>
							</div>
						</div>
						{/* code for the mobile version of navbar */}
						<div className="mr-10 flex lg:hidden ">
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
						<div className="lg:hidden" id="mobile-menu">
							<div ref={ref}className="bg-clarityGold px-2 pt-2 pb-3 space-y-1 sm:px-3 font-gayathri">
								<Link href="/">
									<a className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
								</Link>
								<Link href="/pricing">
									<a className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"> Services </a>
								</Link>
								<Link href="/otherbusinesses">
										<a className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"> Other Businesses </a>
								</Link>
								<Link href="">
									<a className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"> Gallery</a>
								</Link>
									
								<Link href="">
									<a className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"> Book Now </a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}