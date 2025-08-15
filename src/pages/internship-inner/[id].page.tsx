import { InternshipInnerInfo } from "@/feature"
import Head from "next/head"
import React from "react"

import { NavbarProfile } from "@/widgets"

const ProfilePage = () => {
	return (
		<>
			<Head>
				<title>My Applications</title>
			</Head>
			<NavbarProfile />
			<InternshipInnerInfo />
		</>
	)
}

export default ProfilePage
