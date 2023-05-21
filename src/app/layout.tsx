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
						<div className='fixed w-6 h-6  bottom-0 right-0'>
							<div className='w-0 h-0 -rotate-90'>
								<div className='absolute top-0 left-0 text-sm w-screen  opacity-80 h-12'>Designed & Coded by Chema Diez del Corral</div>
							</div>
						</div>

						<Footer />
					</div>
				</main>
			</body>
		</html>
	);
}
