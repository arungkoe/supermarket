import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"
import { Heart } from "lucide-react"


export default function HomeTrending() {
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
				<ul>
					<li>
						<Heart />
						<h3>Section Home Trending</h3>
					</li>
				</ul>
				<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
			</div>

		</div>
	</>
  )
}