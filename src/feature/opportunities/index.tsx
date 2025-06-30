import Image1 from "@//shared/assets/images/image1.png"
import { Box, Container } from "@mantine/core"
import React from "react"

import { Banner, OpportunitiesCard, TitleHead } from "@/shared/ui"

import s from "./opportunities.module.scss"

export const Opportunities = () => {
	return (
		<Box className={s.opportunitiesWrapper}>
			<Container size={"1440px"}>
				<TitleHead
					info={"Opportunities"}
					title={"Internship Program"}
					description={
						"The fastest and highest quality approach to the internship of your dreams"
					}
				/>

				<Box className={s.opportunitiesGrid}>
					{Array.from({ length: 6 }).map((_, index) => (
						<OpportunitiesCard
							key={index}
							imageSrc={Image1}
							title={"Internship Program"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
							icon={(index + 1) % 3 !== 0}
						/>
					))}
				</Box>
				<Banner />
			</Container>
		</Box>
	)
}
