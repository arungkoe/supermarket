import Image from "next/image";
import HeaderTop from "@/components/header-top";
import NavPrimary from "@/components/nav-primary";
import HomeColumn from "@/components/home-column";
import HomeDeals from "@/components/home-deals";
import HomeGames from "@/components/home-games";
import HomeGetIt from "@/components/home-get-it";
import HomeButteryVelvets from "@/components/home-buttery-velvets";
import HomeFeaturedVideos from "@/components/home-featured-videos";
import HomeThreeCols from "@/components/home-three-cols";

export default function Home() {
  return (
	<>
		<header className="w-full relative mx-auto">
			<HeaderTop />
			<NavPrimary />
		</header>
		
		<main className="w-full ">
			<section>
				<HomeColumn />
			</section>
			<section>
				<HomeDeals />
			</section>
			<section>
				<HomeGames />
			</section>
			<section>
				<HomeGetIt />
			</section> 
			<section>
				<HomeButteryVelvets />
			</section> 
			<section>
				<HomeFeaturedVideos />
			</section>
			<section>
				<HomeThreeCols />
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
		</main>
		
		<footer>
			<div>Grid Pilihan</div>
		</footer>
	</>
	);
	
}
