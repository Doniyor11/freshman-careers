import { InternshipProfile } from "@/feature"
import dynamic from "next/dynamic"
import Head from "next/head"
import React from "react"

import { NavbarProfile } from "@/widgets"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})

const ProfilePage = () => {
	return (
		<>
			<PrivateRoute>
				<Head>
					<title>My Applications</title>
				</Head>
				<NavbarProfile />
				<InternshipProfile />
			</PrivateRoute>
		</>
	)
}

export default ProfilePage
