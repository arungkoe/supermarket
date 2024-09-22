import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"
import { Heart } from "lucide-react"

import Minecraft0454 from "/public/games/Minecraft-Dungeons-Ultimate-Edition-Nintendo-Switch-0454.jpg"
import SONY3001549 from "/public/games/SONY-3001549-PS4-WIRELESS-DUALSHOCK-CONTROLLER-MAGMA-RED_fee287b3.jpg"
import PDPAfterglow from "/public/games/PDP-Afterglow-Deluxe-LED-Wireless-Power-Nintendo-Switch-Pro-Controller-Switch-Lite-OLED-Compatible_b1ab.jpg"
import Nintendo4e61f271 from "/public/games/Nintendo-Switch-Ring-Fit-Adventure-Black_4e61f271.jpg"
import Thrustmaster458 from "/public/games/Thrustmaster-Ferrari-458-Spider-Racing-Wheel-Xbox-Series-X-S-One_b35dd780.jpg"
import Nintendo6c21c from "/public/games/Nintendo-Switch-Joy-Con-L-R-Left-Neon-Red-Right-Neon-Blue-Controllers_6c21c.jpg"

export default function HomeGames() {
  return (
    <>
		<div className="header-section ">
			<div className="wrapper">
				<h2 className="text-2xl">Trending in games & accessories</h2>
			</div>
		</div>
		<div className="container-section">
			<div className="wrapper relative">
				<Link href="" className="absolute z-20 left-0 top-[20%]"><CircleChevronLeft strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
				<ul className="w-full lg:flex justify-around sm:flex flex-wrap sm:justify-center">
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={Minecraft0454} alt={"Minecraft"} />
						<h3>$34.96</h3>
						<p>Minecraft Dungeons: Ultimate Edition, Nintendo Switch, 045496598105</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">+ Add</button>
					</li>
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={SONY3001549} alt={"SONY 3001549"} />
						<h3>$34.96</h3>
						<p>SONY 3001549 PS4 WIRELESS DUALSHOCK CONTROLLER - MAGMA RED</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">Options</button>
					</li>
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={PDPAfterglow} alt={"PDP Afterglow"} />
						<h3>$34.96</h3>
						<p>PDP Afterglow Deluxe LED Wireless Power Nintendo Switch Pro Controller, Switch Lite/OLED Compatible</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">+ Add</button>
					</li>
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={Nintendo4e61f271} alt={"Nintendo"} />
						<h3>$34.96</h3>
						<p>Nintendo Switch, Ring Fic Adventure Black</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">+ Add</button>
					</li>
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={Thrustmaster458} alt={"Thrustmaster 458"} />
						<h3>$34.96</h3>
						<p>Thrustmaster Ferrari 458 Spider Racing Wheel - (Xbox Series X|S, One)</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">+ Add</button>
					</li>
					<li className="relative w-6/12 md:w-4/12 lg:w-2/12 mx-auto px-2">
						<Heart className="absolute z-20 right-0 stroke-black" />
						<Image src={Nintendo6c21c} alt={"Nintendo 6c21c"} />
						<h3>$34.96</h3>
						<p>Nintendo Switch - Joy-Con (L/R) - Left Neon Red/ Right Neon Blue Controllers</p>
						<button className="rounded-full px-4 py-1 bg-gray-200 text-gray-900 border-gray-500 border-2">+ Add</button>
					</li>
				</ul>
				<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
			</div>
		</div>
	</>
  )
}