import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<ProfilePic />
				{children}
			</body>
		</html>
	);
}
