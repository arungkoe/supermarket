import Link from "next/link"; 
import Image from "next/image"; 

export default function HeaderTop() {
  return (
		<div className="header-wrapper">
			<div className="header-top">
				<div className="header-top-left">
					<div className="">Brand</div>
					<div className="banner">
						<Image src="" alt="banner" width="0" height="0" />
						<div className="">
							<p>How do you want your items</p>
							<p>sacramento, 98529, </p>
						</div>
						<div>
							<i>v</i>
						</div>
					</div>
				</div>
				<div classclassName="header-top-middle">
					<div>
						<form>
							<input type="search" placeholder="Search everything at Walmart online and in store" />
							<button><i>v</i></button>
							<button><i>O</i></button>
						</form>
					</div>
				</div>
				<div classclassName="header-top-right cart_account">
					<ul>
						<li>
							<Link><i>0</i><div>Reorder My Items</div></Link>
						</li>
						<li>
							<Link><i>0</i><div>Sign In Account</div></Link>
						</li>
						<li>
							<div>
								<button>
									<i>icon/i><span>0</span><span>$.0000</span>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="header-space">
			
			</div>
			<nav className="header-top">
				<p>Menu Navigation</p>
			</nav>
		</div>
	
  )
}
