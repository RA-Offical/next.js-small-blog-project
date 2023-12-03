import Image from "next/image";
function ProfilePic() {
	return (
		<section className="w-full mx-auto">
			<Image
				className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 w-[200px] h-[200px] object-cover"
				src="/images/profile.jpg"
				width={200}
				height={200}
				priority={true}
				alt="Rashid Ameer"
			/>
		</section>
	);
}
export default ProfilePic;
