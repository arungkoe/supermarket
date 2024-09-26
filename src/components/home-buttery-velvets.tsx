import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react"
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"
import dfwc11bb06d from "/public/velvets/dfwc11bb06d.jpg"
import Ivory18 from "/public/velvets/18Ivory-Pleated-Shade-Ribbed-Ceramic-Table-Lamp.jpg"
import MyTexas9 from "/public/velvets/My-Texas-House-Bronwyn-2-X-5-6-Grey-Geometric-Runner-Rug9.jpeg"
import Better5097 from "/public/velvets/Better-Homes-Gardens-Springwood-Caning-Side-Table-Light-Honey-Finish5097.jpg"

export default function HomeButteryVelvets() {
  return (
	<>
		<div className="row-section lg:flex w-full" >
			<div className="left-section lg:w-[50%] sm:w-full">
				<div className="header-section flex justify-between">
					<div>
						<h2 className="font-bold text-3xl">Buttery velvets & beyond</h2>
						<h3 className="font-light text-lg">Surround yourself in warmth.</h3>
					</div>
					<Link href="/" className="mr-4r">View all</Link>
				</div>
				<div className="container-section relative">
					<Link href="" className="absolute z-20 left-0 top-[20%]"><CircleChevronLeft strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
					<ul className="container overflow-auto w-full mx-auto flex">
						<li className="relative mx-auto w-48 inline">
							<Heart className="absolute z-20 right-4 top-2 stroke-black" />
							<Image 
								src={Ivory18} alt="Ivory" width={0} height={0}
								className="h-48 w-48"
							/>
							<div className="h-10 w-full"></div>
							<div><h3 className="font-bold text-xl text-slate-900">$55.00</h3><span></span></div>
							<div className="text-slate-700">Options from $55.00 – $99.00</div>
							<div className="text-slate-700"><span>20" x 30" Filigree Arch Metal Wall Mirror Decor in Gold</span></div>
							<div className="text-slate-700"><button className="bg-slate-100 px-4 py-2 rounded-full no-underline text-slate-950 font-bold">options</button></div>
						</li>
						<li className="relative mx-auto w-48 inline">
							<Heart className="absolute z-20 right-4 top-2 stroke-black" />
							<Image 
								src={MyTexas9} alt="MyTexas9" width={0} height={0}
								className="h-48 w-48"
							/>
							<div className="h-10 w-full"></div>
							<div><h3 className="font-bold text-xl text-slate-900">$21.00</h3><span></span></div>
							<div className="text-slate-700">Options from $21.00 – $342.00</div>
							<div className="text-slate-700"><span>My Texas House Bronwyn 2' X 5'6" Grey Geometric Runner Rug</span></div>
							<div className="text-slate-700"><button className="bg-slate-100 px-4 py-2 rounded-full no-underline text-slate-950 font-bold">options</button></div>
						</li>
						<li className="relative mx-auto w-48 inline">
							<Heart className="absolute z-20 right-4 top-2 stroke-black bg-white rounded-full" />
							<Image 
								src={Better5097} alt="Better5097" width={0} height={0}
								className="h-48 w-48"
							/>
							<div className="h-10 w-full"></div>
							<div><h3 className="font-bold text-xl text-slate-900">$72.00</h3><span></span></div>
							<div className="text-slate-700"></div>
							<div className="text-slate-700"><span>Better Homes & Gardens Burlwood Round Coffee Table, Light Burl Wood Veneer</span></div>
							<div className="text-slate-700"><button className="bg-slate-100 px-4 py-2 rounded-full no-underline text-slate-950 font-bold">options</button></div>
						</li> 
					</ul>
					<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
				</div>
			</div>
			<div className="right-section lg:w-[50%] sm:w-full relative">
				<Image
					className=""
					src={dfwc11bb06d} alt="" width={0} height={0}
				/>
				<div className=" absolute left-4 top-8">
					<p className="text-lg w-full font-light text-slate-900">Fall Vibes</p>
					<p className="text-5xl w-full mb-4 text-slate-900">Feels like home</p>
					<Link href="/" className="mt-10"><span className="bg-gray-100 px-4 py-2 rounded-full no-underline text-gray-950 font-bold">Shop now</span></Link>
				</div>
			</div>
		</div>
	</>
  )
}