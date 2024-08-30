import Image from "next/image";
import HeaderTop from "@/components/header-top";
import NavPrimary from "@/components/nav-primary";

export default function Home() {
  return (
	<>
		<header className="w-full relative mx-auto">
			<HeaderTop />
			<NavPrimary />
		</header>
		
		<section>
			<div>Grid Pilihan</div>
		</section>
		<section>
			<div>Flash Deal</div>
		</section>
		<section>
			<div>Get your student</div>
		</section>
		<section>
			<div>Grid Fresh decor</div>
		</section>
		<section>
			<div>Wall halloween</div>
		</section>
		<section>
			<div>Make Their Day</div>
		</section>
		<footer>
			<div>Grid Pilihan</div>
		</footer>
	</>
	);
	
}
