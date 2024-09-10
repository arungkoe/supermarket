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
		
		<div className="w-full flex flex-column justify-center">
			<Link href="" className=""><CircleChevronLeft strokeWidth={0.5} className="w-20 h-20" /></Link>
			<ul>
				<li>
					<div className="">
						<Link href="" className=""></Link>
						<div> 
							<Image src={Homall100} alt="Homall100" width={100} height={100} /> 
						</div>
						<div className="h-4">space</div>
						<div className="h-4">$247.70</div>
						<div className="h-4 mb-4">More options from $225.69</div>
						<span className="h-4">
							HP
						</span>
						<div className="button--link h-4">Options</div>
					</div>
				</li>
			</ul>
			<Link href="" className=""><CircleChevronRight strokeWidth={0.5} className="w-20 h-20" /></Link>
		</div>
   </>
   )
}
