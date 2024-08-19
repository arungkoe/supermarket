import Link from "next/link";
export default function TopMenu() {
  return (
	<header className="shopee-top">
		<div className="wraper navbar">
			<nav className="container navbar bg-blue-600 text-white text-sm flex justify-between">
				<div className="navbar_center font-light">
					<Link href="#">Seller Center</Link>
					<Link href="#">Mulai Berjualan</Link>
					<div><Link href="#">Download</Link></div>
					<div><Link href="#">Ikuti Kami</Link></div>
					<div>
						<Link href="#">Fb</Link>
						<Link href="#">Ig</Link>
						<Link href="#">Km</Link>
					</div>
				</div>	
				<div className="navbar_space">
				</div>	
				<div className="navbar_links">
					<ul>
						<li>
							<Link href="">Notifikasi</Link>
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
