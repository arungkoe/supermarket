import Image from "next/image";
import TopMenu from "@/components/top-menu";

export default function BoroxPage() {
  return (
	<>
 		<header className="bg-[#1d1a29] w-full bx-static bx-dark">
			<nav className="border-gray-200 py-2">
				<div className="flex flex-wrap justify-between items-center px-6 mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] max-[320px]:px-[12px] sm:max-w-[540px]">
					 
					<div className="flex items-center lg:order-2">
						<button type="button" className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden 2xl:block xl:block lg:block">
							Get a quote</button>
						<button data-collapse-toggle="mobile-menu" type="button" id="dropdown-toggle" className="inline-flex items-center border border-[#27213b] p-2 text-lg text-gray-500 rounded-lg lg:hidden" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<i className="fa-solid fa-bars"></i>
						</button>
					</div>
					<div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
						<ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 2xl:border-0 lg:border-0 lg:bg-[#1d1a29] border lg:mt-0 lg-mb-4 lg:p-[0] lg:border-none lg:rounded-[0] lg:text-[15px] mt-4 p-[15px] 2xl:mb-0 xl:mb-0 lg:mb-0 mb-2 border-[#27213b] rounded-[30px] text-[13px]" id="top-menu">
							<li className="nav-item active">
								<a href="#home" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">Home</a>
							</li>
							<li className="nav-item">
								<a href="#about" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">About</a>
							</li>
							<li className="nav-item">
								<a href="#experience" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">Experience</a>
							</li>
							<li className="nav-item">
								<a href="#portfolio" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">Portfolio</a>
							</li>
							<li className="nav-item">
								<a href="#news" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">News</a>
							</li>
							<li className="nav-item">
								<a href="#contact" className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</>
  );
}
