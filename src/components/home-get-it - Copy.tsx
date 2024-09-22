import Link from "next/link";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"

import Groceryafe5 from "/public/get-it/grocery-afe57033daf2.jpg"
import Home404 from "/public/get-it/home-774567d41404.jpg"
import Patio692 from "/public/get-it/patio-692c544b3baf.jpg"
import Fashion343 from "/public/get-it/Fashion-2a8343c2b70c.jpg"
import Electronics106 from "/public/get-it/electronics-49e8ed571106.jpg"
import Baby686 from "/public/get-it/baby-686d9bbbbfbe.jpg"
import Toys961 from "/public/get-it/Toys-1921a8ace961.jpg"
import Health450 from "/public/get-it/health-16a450d8ff5a.jpg"
import Personal728 from "/public/get-it/personal-7bbed28ae7ea.jpg"
import Beauty993 from "/public/get-it/Beauty-c9b93df4aff0.jpg"
import Auto365 from "/public/get-it/auto-fd23d6198365.jpg"
import Improvement190 from "/public/get-it/improvement-3060dd6be190.jpg"



export default function HomeGetIt() {
  return (
	<>
		<div className="header-section">
			<div className="wrapper w-full flex flex-col sm:flex-row sm:justify-between ">
				<div className="title-section">
					<h2>Get it all right here</h2>
				</div>
				<Link href="#" className="block underline">View all</Link>
			</div>
		</div>
		<div className="container-section flex flex-col">
			<div className="wrapper relative">
				<Link href="" className="absolute z-20 left-0 top-[20%]"><CircleChevronLeft strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
				<ul className="w-full flex px-6 overflow-auto gap-4">
					<li className="container relative w-[320px] mx-auto flex justify-center flex-col bg-rose-200">
						<Image src={Groceryafe5} alt={"Grocery"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Grocery</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Home404} alt={"home"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Home</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Patio692} alt={"Patio"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Patio & Garden</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Fashion343} alt={"Fashion"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Fashion</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Electronics106} alt={"Electronics"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Electronics</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Baby686} alt={"Baby"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Baby</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Toys961} alt={"Toys"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Toys</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Health450} alt={"Health"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Health & Wellness</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Personal728} alt={"Personal"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Personal Care</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Beauty993} alt={"Beauty"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Beauty</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Auto365} alt={"Auto & Tires"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Auto & Tires</p></div>
					</li>
					<li className="container relative w-80 mx-auto flex justify-center flex-col">
						<Image src={Improvement190} alt={"Improvement"} className="mx-auto max-w-[150px]" />
						<div className="mb-4 w-full block"><p className="mx-auto text-center">Home Improvement</p></div>
					</li>
				</ul>
				<h2>Home Get It</h2>
				<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
			</div>
		</div>
	</>
  )
}