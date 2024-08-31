import Link from "next/link"; 
import Image from "next/image"; 
import WLogo from "/public/wlogo.png";
import k2v1 from "/public/k2v1.webp"
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';



export default function HeaderTop() {
  return (
		<div className="header-wrapper w-full bg-blue-500 m-auto py-6 px-6">
			<div className="header-top lg:flex lg:justify-between ">
				<div className="button-mobile hidden"><button>B</button></div>
				<div className="header-top-left flex items-center">					
					<div className="mr-4"><Image src={WLogo} alt="logo" width="36" height="36" /></div>
					<div className="banner bg-blue-800 rounded-full w-80 flex items-center px-4 py-1 justify-between">
						<Image src={k2v1} alt="banner" width="32" height="32" />
						<div className="text-base">
							<p className="font-medium">How do you want your items</p>
							<p className="font-light">sacramento, 98529, </p>
						</div>
						<div>
							<i><ChevronDown /></i>
						</div>
					</div>
				</div>
				<div className="header-top-middle flex items-center rounded-full bg-white md:min-w-[574px] ml-6">
					<div className="w-full">
						<form className="py-1 px-4 flex items-center justify-between">
							<input type="search" placeholder="Search everything at Walmart online and in store" className="w-full border-0" />
							<button className="hidden"><i>v</i></button>
							<button className="px-2 py-2 rounded-full bg-blue-800"><Search /></button>
						</form>
					</div>
				</div>
				<div className="header-top-right cart_account text-sm">
					<ul className="flex gap-4">
						<li className="hover:bg-blue-900 hover:rounded-full px-2">
							<Link href="/">
								<div className="flex items-center gap-2"><Heart /><div>Reorder <br /><strong>My Items</strong></div></div>
							</Link>
						</li>
						<li className="hover:bg-blue-900 hover:rounded-full px-2">
							<Link href="/">
								<div className="flex items-center gap-2"><User /><div>Sign In  <br /><strong>Account</strong></div></div>
							</Link>
						</li>
						<li className="hover:bg-blue-900 hover:rounded-full px-2">
							<div>
								<button>
									<i><ShoppingCart /></i><span>0</span><span>$.0000</span>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
			 
		</div>
	
  )
}
