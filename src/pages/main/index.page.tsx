import {
	Faq,
	Internships,
	Mentorship,
	Opportunities,
	Reviews,
	Webinar,
} from "@/feature"
import dynamic from "next/dynamic"
import Head from "next/head"

import { Footer, Navbar } from "@/widgets"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
	ssr: false,
})

const HomePage = () => {
	return (
		<>
			<PublicRoute>
				<Head>
					<title>Freshman Careers</title>
					<meta name="description" content="" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.png" />
				</Head>
				<Navbar />
				<Internships />
				<Opportunities />
				<Mentorship />
				<Reviews />
				<Webinar />
				<Faq />
				<Footer />
			</PublicRoute>
		</>
	)
}

export default HomePage
