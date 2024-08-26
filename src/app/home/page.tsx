import Image from "next/image";
import TopMenu from "@/components/top-menu";
import HeaderContent from "@/components/header-content";

export default function Home() {
  return (
  <>
	<header className="shopee-top-menu mx-auto p-2 bg-blue-600 w-full ">
		<TopMenu />
		<HeaderContent />
	</header>
 
	</>
  );
}
