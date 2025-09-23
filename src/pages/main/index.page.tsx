import { Faq, Internships, Mentorship, Opportunities } from "@/feature"
import dynamic from "next/dynamic"

import { Footer, Navbar } from "@/widgets"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
	ssr: false,
})

const HomePage = () => {
	return (
		<>
			<PublicRoute>
				<Navbar />
				<Internships />
				<Opportunities />
				<Mentorship />
				{/*<Reviews />*/}
				{/*<Webinar />*/}
				<Faq />
				<Footer />
			</PublicRoute>
		</>
	)
}

export default HomePage
