import Link from "next/link";
export default function TopMenu() {
  return (
	<header className="shopee-top">
		<div className="wraper navbar">
			<nav className="container navbar">
				<div className="navbar_center">
					<Link href="">Seller Center</Link>
					<Link href="">Mulai Berjualan</Link>
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
