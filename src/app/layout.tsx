import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Chema Diez del Corral",
	description: "Portfolio Prduct Designer & Creative Technologist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			data-theme='light'>
			<body className={inter.className}>
				<main className='w-screen flex  items-center flex-col min-h-screen'>
					<div className='px-8 md:px-16 lg:px-24 xl:px-48 pt-4 md:pt-6 lg:pt-8 w-full'>
						<Header />
						{children}
						<Footer />
					</div>
				</main>
			</body>
		</html>
	);
}
