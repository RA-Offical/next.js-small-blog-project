import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="bg-stone-400 p-4 sticky top-0 drop-shadow-xl z-10">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row ">
				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link href="/" className=" text-white/80 hover:text-white no-underline">
						Rashid Ameer
					</Link>
				</h1>

				<div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
					<Link href="https://www.youtube.com" className="text-white/90 hover:text-white">
						<FaYoutube />
					</Link>
					<Link href="https://www.youtube.com" className="text-white/90 hover:text-white">
						<FaLaptop />
					</Link>
					<Link href="https://www.youtube.com" className="text-white/90 hover:text-white">
						<FaGithub />
					</Link>
					<Link href="https://www.youtube.com" className="text-white/90 hover:text-white">
						<FaTwitter />
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
