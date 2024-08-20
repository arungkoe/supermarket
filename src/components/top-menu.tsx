import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

export default function TopMenu() {
  return (
	<header className="shopee-top-menu mx-auto p-2">
		<div className="wraper navbar ">
			<nav className="container navbar bg-blue-600 text-white text-sm flex justify-between p-2">
				<div className="navbar_center font-light flex">
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:-inset-4 after:text-xs">Seller Center</Link>
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:-inset-4 after:text-xs">Mulai Berjualan</Link>
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:-inset-4 after:text-xs">Download</Link>
					<Link href="#" className="block px-1">Ikuti Kami</Link>
					<div className="block flex gap-2 py-1">
						<Link href="#"><FaFacebook /></Link>
						<Link href="#"><FaInstagram /></Link>
						<Link href="#"><FaUniversity /></Link>
					</div>
				</div>	
				<div className="navbar_space bg-white h-2 block">
				</div>	
				<div className="navbar_links flex">
					<ul className="block flex w-full">
						<li className="block px-4">
							<Link href="">Notifikasi</Link>
						</li>
						<li className="block px-4">
							<Link href="">Bantuan</Link>
						</li>
					</ul>
				</div>	
			</nav>
		</div>
		<div>
		</div>
	</header>
  )
}
