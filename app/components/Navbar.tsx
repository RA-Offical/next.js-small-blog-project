import Link from "next/link";

function Navbar() {
	return (
		<nav className="bg-stone-400 p-4 sticky top-0 drop-shadow-xl">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
				<Link href="/" className=" text-white/80 hover:text-white no-underline">
					Rashid Ameer
				</Link>
			</div>
		</nav>
	);
}
export default Navbar;
