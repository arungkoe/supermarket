import Link from "next/link";
import { FaFacebook } from "react-icons/fa"; 

export default function NavPrimary() {
  return (	
		<div className="nav-primary wrapper navbar w-full bg-blue-200 ">
			<nav className="container navbar text-white text-sm flex justify-between p-2">
				<div className="nav-primary-left flex font-bold text-blue-900">
					<div className="pr-4"><Link href="#" className="block"><i>Icon</i>Departments</Link><i>v</i></div>
					<div className="pr-4"><Link href="#" className="block"><i>Icon</i>Services</Link><i>v</i></div>	
					<div>after</div>			 
				 </div>
				 <ul className="nav-primary-right main-menu flex justify-between gap-2 text-blue-900">
				 	<li>
						<Link href="#" className="block px-1">Savings</Link>
					</li>	
					<li>
						<Link href="#" className="block px-1">Grocery & Essential</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">New & Trending</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">College Essentials</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">Halloween</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">Collector Shop</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">Home</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">Electronics</Link>
					</li>
					<li>
						<Link href="#" className="block px-1">Fashion</Link>
					</li>
				 </ul>
			</nav>
		</div>
	
  )
}
