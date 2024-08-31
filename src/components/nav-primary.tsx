import Link from "next/link";
import { LayoutGrid } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export default function NavPrimary() {
  return (	
		<div className="nav-primary wrapper navbar w-full bg-blue-100 ">
			<nav className="container navbar text-white text-sm p-2 w-full flex">
				<div className="nav-primary-left flex font-bold text-blue-900">
					<div className="flex pr-4"><Link href="#" className="flex gap-2"><i><LayoutGrid /></i>Departments</Link><i><ChevronDown /></i></div>
					<div className="flex pr-4"><Link href="#" className="flex gap-2"><i><LayoutList /></i>Services</Link><i><ChevronDown /></i></div>	
					<div className="flex mr-4 after:content-[''] after:ml-0.5 after:border-l after:border-blue-900"></div>			 
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
