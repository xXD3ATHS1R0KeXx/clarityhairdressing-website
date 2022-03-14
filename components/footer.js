import React from 'react'
import Image from 'next/image';
import clarityLogo from "../public/logo.png"


export default function footer(){
    return(
		<>
			<div className="bg-clarityGold h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-5">
				<div className="pl-5">
					<ul>
                        <Image src={clarityLogo} width={200} height={200} />
						<div className="flex gap-6 pb-5">
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-gayathri font-bold text-2xl pb-4">Contact</p>
						<li className='font-gayathr text-white'>
							Address: 239 Brighton Rd, Somerton Park SA 5044
							<br/>
							Phone: 0410147583 
							<br/>
							Email: test@gmail.com
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-gayathri font-bold text-2xl pb-4">Opening Times</p>
						<li className="text-white text-md pb-2 font-semibol">
							Sunday: closed 
							<br/>
							Monday: closed 
							<br/>
							Tuesday: 9:30 - 5 
							<br/>
							Wednesday: 9:30 - 4 
							<br/>
							Thursday: 10:00 - 8:30 
							<br/>
							Friday: 9:30 - 4:00 
							<br/>
							Saturday: 9:30 - 3:00 
							<br/>
							<span className='font-bold'>Please note beauty lounge opening hours vary depending on each business</span>	
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
