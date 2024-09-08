import Image from "next/image";
import Link from "next/link";
import { CircleArrowDown } from 'lucide-react';

import k2_47a92855 from "/public/col/k2-_47a92855-e1bf-4072-9d21-4eca3ebf8f64.v1.jpg";
import k2_4c81c441 from "/public/col/k2-_4c81c441-01fa-45cf-b10c-4b92f0edeab1.v1.jpg";
import k2_4a636636 from "/public/col/k2-_4a636636-0036-4d03-bc20-9a287e5dfdba.v1.jpg";
import k2_6f25175c from "/public/col/k2-_6f25175c-ce8e-4002-8224-6853b4a678db.v1.jpg";
import k2_b3da210c from "/public/col/k2-_b3da210c-9ee7-4be7-a2fa-e48adeb6f16f.v1.jpg";
import k2_2818df06 from "/public/col/k2-_2818df06-d13d-43c9-8271-770b32768206.v1.jpg";
import k2_010ce435 from "/public/col/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg";
import k2_33b8b577 from "/public/col/k2-_33b8b577-acd3-426d-a81c-7267ec13e366.v1.jpg";
import k2_05e163c5 from "/public/col/k2-_05e163c5-8ba7-4b77-b56e-6cdf280734ff.v1.jpg";
import k2_87ec53a9 from "/public/col/k2-_87ec53a9-1e29-4a6a-b280-ce38f7d11d70.v1.jpg";

export default function HomeColumn() {
  return ( 
  	<>
	<div className="w-full h-4"></div>
    <div className="flex justify-between">	
		<div className="w-1/4 px-4">
			<div className="block w-full relative rounded-lgd my-8 bg-[#c72c4b]">
				<Image 
					src={k2_47a92855} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-white absolute z-10 top-[10%] left-[10%]">
					<h2 className=" text-2xl mb-4">Mattresses from $65 No joke</h2>
					<Link href="#" className="underline ">Shop Now</Link>
				</div>
			</div>	
			<div className="block w-full relative rounded-lg bg-[#92e2fc] my-8">
				<Image 
					src={k2_4c81c441} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-blue-900 absolute z-10 top-[5%] left-[10%]">
					<h2 className="text-3xl font-bold w-2/3 mb-4">Top brands, super-low prices</h2>
					<Link href="#" className="underline">Shop fashion</Link>
				</div>
			</div>
			<div className="block w-full rounded-lg relative bg-[##ff596a] my-8">
				<Image 
					src={k2_4a636636} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-rose-900 absolute z-10 top-[10%] left-[10%]">
					<h2 className=" text-2xl mb-4 font-medium">Apple Mac Book</h2>
					<Link href="#" className="underline">Shop now</Link>
				</div>
			</div>
		</div>
		<div className="w-2/4 px-2 flex flex-row flex-wrap justify-between shrink ">
			<div className="block w-full rounded-lg relative my-8">
				<Image 
					src={k2_6f25175c} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-green-900 z-10 absolute top-[10%] left-[5%]">
					<h3 className="text-xl">1,000s of amazing saving</h3>
					<h2 className="text-6xl font-bold mb-8">Rolls back <br/>& more 
					<svg className="w-9 h-9 inline ml-4 bg-white rounded-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12 8H9V3H7V8H4V9L8 13L12 9V8Z" fill="#ff0000"></path></svg>
					</h2>
					<Link href="#" className="underline bg-white border-2 border-green-900 rounded-full px-4 py-2">Shop all</Link>
				</div>
				<div className="text-green-900 z-10 absolute bottom-[5%] left-[5%]">
					<p className="line-through text-2xl">$348</p>
					<p className="text-4xl font-bold"><sup>$</sup>298</p>
				</div>
			</div>
			<div className="block w-[48%] rounded-lg relative shrink ">
				<Image 
					src={k2_b3da210c} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-blue-900 z-10 absolute top-[10%] left-[2rem] w-[90%]">
					<h2 className="text-2xl mb-6">Ding! Appliance price drops.</h2>
					<Link href="#" className="underline">Shop all</Link>
				</div>
			</div>
			<div className="block w-[48%] rounded-lg relative">
				<Image 
					src={k2_2818df06} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-blue-900 z-10 absolute top-[10%] left-[2rem] w-[90%]">
					<h2 className="text-2xl mb-6">Up to 65% off</h2>
					<Link href="#" className="underline">Shop all</Link>
				</div>
			</div>
			<div className="block w-full basis-full rounded-lg mt-4 relative">
				<Image 
					src={k2_010ce435} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-blue-900 z-10 absolute top-[10%] left-[2rem] w-[70%]">
					<h2 className="text-2xl">Walmart+ members save big with free delivery from stores</h2>
					<p className="mb-6">Terms apply</p>
					<Link href="#" className="underline">Join Walmart+</Link>
				</div>
			</div>
		</div>
		<div className="w-1/4 px-4">
			<div className="block w-full relative my-8">
				<Image 
					src={k2_33b8b577} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/> 
				<div className="text-lime-900 absolute z-10 top-[10%] left-[10%]">
					<h2 className=" text-2xl mb-4 font-medium max-w-36">Wellness for way less</h2>
					<Link href="#" className="underline">Shop now</Link>
				</div>
			</div>
			<div className="block w-full relative my-8">
				<Image 
					src={k2_05e163c5} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-teal-900 absolute z-10 top-[10%] left-[10%]">
					<h2 className=" text-2xl mb-4 font-medium max-w-48">More miles for your money</h2>
					<Link href="#" className="underline">Shop now</Link>
				</div>
			</div>	
			<div className="block w-full relative my-8">
				<Image 
					src={k2_87ec53a9} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="text-gray-900 absolute z-10 top-[10%] left-[10%]">
					<h2 className="font-bold text-2xl mb-4 font-medium max-w-48">Patio & Garden Landscaping</h2>
					<Link href="#" className="underline">Shop now</Link>
				</div>
			</div>		
		</div>
	</div> 
	</>
  )
}