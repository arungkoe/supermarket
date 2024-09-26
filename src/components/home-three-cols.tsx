import Image from "next/image";
import Link from "next/link";

import k2zon49 from "/public/cols3/k2-zon49.webp"
export default function HomeThreeCols() {
  return (
    <>
		<div className="container-section w-full">
			<div  className="wrapper flex gap-2">
				<div className="cols w-4/12 h-96 border-2 border-sky-300 p-2 relative flex items-center justify-start z-0">
					<div className="w-100 ">
						<Image src={k2zon49} alt={'k2zon49'} fill style={{objectFit: "cover", }} className="overflow-hidden" />
					</div>
					<div className="w-60 flex flex-wrap justify-start items-center z-10 absolute" >
						<p>No rules, no judgment</p>
						<p>Style without limits</p>
						<Link href="/"><span>Shop fashion</span></Link>
					</div>
				</div>
				<div className="cols w-4/12 h-96 border-2 border-lime-300 p-2">
					<h2>Block Home Three Dua</h2>
				</div>
				<div className="cols w-4/12 h-96 border-2 border-teal-300 p-2">
					<h2>Block Home Three Tiga</h2>
				</div>
			</div>
			
		</div>
	</>
  )
}