import Link from "next/link";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"

import Homall100 from "/public/deals/Homall-100-Gallon-Outdoor-Box-Deck-Plastic-Resin-Storage-Box-Brown_b959fb97-5028-466b-bae3-644e2f57157e.b32c9e2fb707d42b3ce30edb8b25decf.jpg"
import BEAUTYPEAKFull from "/public/deals/BEAUTYPEAK-Full-Length-Mirror-58-x18-Rectangle-Body-Dressing-Floor-Mirrors-Black_4d17676c-8bb5-44cd-b5c5-98babdda19b4.02e650a9b30b55bbc96f5d1742124b97.jpg"
import JONPONY110 from "/public/deals/JONPONY-110-63-Oversized-U-Shaped-Couch-4-Seat-Sectional-Sofa-Convertible-Upholstery-Symmetrical-Sof-Sleeper-Sofa-Couch-Double-Chaise-Lounge-Memory-F_8a76b4a9-2c51-4ac8-a0fc-e6bc092c9290.5f379.jpg"
import EvolurEva from "/public/deals/Evolur-Eva-Changing-Pad-Light-Gray_44af9e14-8c11-4fe1-84dd-ef6819bf3db9.0c30bcd586ed5df7bc3a20e2ba9f3c05.jpg"
import WirelessPS4 from "/public/deals/Wireless-Controller-for-PS4-Remote-Game-Controller-Compatible-with-Playstation-4-PS4-Slim-PS4-Pro-Windows-PC-Graffiti_37311435-7f5d-4dd3-8349-486d38d9c577.bb1a2eda5ceac0e5f605874bbbbd2832.jpg"
import SofreeBedding from "/public/deals/Sofree-Bedding-King-Mattress-10-Inch-Memory-Foam-Mattress-Box-Individual-Pocket-Spring-Motion-Isolation-Pressure-Relief-Medium-Firm-CertiPUR-US_431e7b71-55eb-4930-ac4d-96b8b8b2b466.9b79fe81082.jpg"

export default function HomeDeals() {
  return (
  <>
     	<div className="w-full flex justify-between">
			<div className="block">
				<h2>Flash Deals</h2>
				<h3>Up to 65%</h3>
			</div>
			<Link href="#" className="block underline">View all</Link>
		</div>
		
		<div className="w-full flex items-center relative">
			<Link href="" className="absolute z-20 left-0 top-[20%]"><CircleChevronLeft strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
			<ul className="lg:w-full lg:flex px-6">
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={Homall100} alt="Homall 100" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-green-500 text-xl">Now $89.99 </h3><span className="line-through mt-auto bottom-0 inline-block text-md text-gray-600">$169.99</span></div>
						<div className="mb-4"><p>More options from $225.69</p></div>
						<div className="mb-4">
							Homall 100 Gallon <br />
							Outdoor Box Deck Plastick Resing Storage Box, Brown
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="text-sm">
						<Link href="" className=""></Link>
						<div> 
							<Image src={BEAUTYPEAKFull} alt="BEAUTYPEAK Full" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-green-500 text-xl">Now $49.99 </h3><span className="line-through mt-auto bottom-0 inline-block text-md text-gray-600">$99.99</span></div>
						<div className="mb-4"><p>Options from $49.99 - $189.99</p></div>
						<div className="mb-4">
							BEAUTYPEAK Full Length Mirror 58"x18" Rectangle Body Dressing Floor Standing Mirrors, Black
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={JONPONY110} alt="JONPONY 110" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-green-500 text-xl">Now $679.79</h3><span className="line-through mt-auto bottom-0 inline-block text-md text-gray-600">$2,999.99</span></div>
						<div className="mb-4"><p>More options from $679.79 - $699.79</p></div>
						<div className="mb-4">
							JONPONY 110.63"Oversized U Shaped Couch,4 Seat Sectional Sofa, Boucle Fabric Convertible Upholstery Symmetrical Sofá Sleeper Sofa Couch with Double Chaise Lounge & Memory Foam for Living Room, Yellow
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={EvolurEva} alt="Evolur Eva" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-xl">Now $56.59 </h3></div>
						<div className="mb-4"><p>Options from $56.59 -$67.99</p></div>
						<div className="mb-4">
							Evolur Eva Changing Pad, Light Gray
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={WirelessPS4} alt="Wireless PS4" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-green-500 text-xl">Now $16.96 </h3><span className="mt-auto bottom-0 inline-block text-md text-gray-600">$29.99</span></div>
						<div className="mb-4"><p>More options from $15.96</p></div>
						<div className="mb-4">
							Wireless Controller for PS4, Remote Game Joystick Compatible with Playstation 4/PS4 Slim/PS4 Pro/PC, Steel Black
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
				<li className="sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={SofreeBedding} alt="Sofree Bedding" /> 
						</div>
						<div className="h-4"> </div>
						<div className="flex justify-between"><h3 className="text-green-500 text-xl">Now $229.899 </h3><span className="mt-auto bottom-0 inline-block text-md text-gray-600">$359.99</span></div>
						<div className="mb-4"><p>More options from $161.79</p></div>
						<div className="mb-4">
							King Mattress, 10-inch gel memory foam king mattress for cooling sleep and pressure relief, medium plush texture for breathability, comfort and well-being
						</div>
						<button className="button--link block text-center rounded-full bg-gray-200 border border-gray-700 py-2 px-4 text-rose-700">Options</button>
					</div>
				</li>
			</ul>
			<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
		</div>
   </>
   )
}
