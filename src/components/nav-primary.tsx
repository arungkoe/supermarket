import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

export default function TopMenu() {
  return (
	
		<div className="wrapper navbar ">
			<nav className="container navbar text-white text-sm flex justify-between p-2">
				<div className="navbar_center font-light flex">
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:text-xs">Seller Center</Link>
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:text-xs">Mulai Berjualan</Link>
					<Link href="#" className="block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:text-xs">Download</Link>
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
					<ul className="block flex w-full items-center">
						<li className="block px-4">
							<Link href="">
								<div className="flex">
									<svg viewBox="0 0 16 16" className="block w-4 h-4 mr-1">
										<path stroke="white" fill="white" d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path>
										<path stroke="white" fill="white"d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
									</svg>
								<span className="inline-block pr-2">Notifikasi</span>
								</div>
							</Link>
						</li>
						<li className="block px-4">
							<Link href="" className="flex">
								<div className="flex">
										<svg viewBox="0 0 16 16" className="block w-4 h-4 mr-1">
 												<circle cx="7" cy="8" r="7" stroke="currentColor" fill="none"></circle>
												<path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"></path>
 										</svg>
								</div>	
								<span className="inline-block pr-2">Bantuan</span>
							</Link>
						</li>
						<li className="block px-4">
							<Link href="" className="flex">
								<div className="flex">
										<svg viewBox="0 0 16 16" className="block w-4 h-4 mr-1" fill="none">
											<path d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33398 8H14.6673" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>
								</div>	
								<span className="inline-block pr-2">Bahasa Indonesia</span>
							</Link>
						</li>
					</ul>
					<Link href="#" className="font-medium block px-1 after:content-[''] after:opacity-50 after:ml-2 after:border-l after:-left-[6px] after:text-xs">Daftar</Link>
					<Link href="#" className="font-medium block">Login</Link>
				</div>	
			</nav>
		</div>
	
  )
}
