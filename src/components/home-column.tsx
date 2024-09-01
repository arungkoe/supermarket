import Image from "next/image";
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
			<div className="block w-full relative my-8">
				<Image 
					src={k2_47a92855} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="absolute top-[50%] left-[50%] text-sky-400">
					<h2>Block Home Column 1</h2>
				</div>
			</div>	
			<div className="block w-full rounded-lg">
				<Image 
					src={k2_4c81c441} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 1</h2>
			</div>
			<div className="block w-full rounded-lg">
				<Image 
					src={k2_4a636636} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 1</h2>
			</div>
		</div>
		<div className="w-2/4 px-2 flex-row">
			<div className="block w-full rounded-lg">
				<Image 
					src={k2_6f25175c} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 2</h2>
			</div>
			<div className="block w-1/2 rounded-lg inline-block pr-4">
				<Image 
					src={k2_b3da210c} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 2</h2>
			</div>
			<div className="block w-1/2 rounded-lg inline-block pl-4">
				<Image 
					src={k2_2818df06} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 1</h2>
			</div>
			<div className="block w-full rounded-lg">
				<Image 
					src={k2_010ce435} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<h2>Block Home Column 2</h2>
			</div>
			<h2>Block Home Column 2</h2></div>
		<div className="w-1/4 px-4">
			<div className="block w-full relative my-8">
				<Image 
					src={k2_33b8b577} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="absolute top-[50%] left-[50%] text-sky-400">
					<h2>Block Home Column 3</h2>
				</div>
			</div>
			<div className="block w-full relative my-8">
				<Image 
					src={k2_05e163c5} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="absolute top-[50%] left-[50%] text-sky-400">
					<h2>Block Home Column 3</h2>
				</div>
			</div>	
			<div className="block w-full relative my-8">
				<Image 
					src={k2_87ec53a9} alt="k2-47a92855"  
					style={{objectFit:"cover"}}
					className="rounded-lg"
				/>
				<div className="absolute top-[50%] left-[50%] text-sky-400">
					<h2>Block Home Column 3</h2>
				</div>
			</div>		
			<h2>Block Home Column 3</h2>
		</div>
	</div> 
	</>
  )
}