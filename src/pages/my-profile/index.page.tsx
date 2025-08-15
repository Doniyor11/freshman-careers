import { MyProfile } from "@/feature"
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
					<title>My Profile</title>
				</Head>
				<NavbarProfile />
				<MyProfile />
			</PrivateRoute>
		</>
	)
}

export default ProfilePage
