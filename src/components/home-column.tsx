import Image from "next/image";
import k247a92855 from "/public/col/k2-_47a92855-e1bf-4072-9d21-4eca3ebf8f64.v1.jpg";

export default function HomeColumn() {
  return (
    <div className="flex justify-between">	
		<div className="w-1/4 px-4">
			<Image src={k247a92855} alt="k2-47a92855" width={100} height={100} />
			<h2>Block Home Column 1</h2>
		</div>
		<div className="w-2/4 px-4"><h2>Block Home Column 2</h2></div>
		<div className="w-1/4 px-4"><h2>Block Home Column 3</h2></div>
	
	</div>
  )
}