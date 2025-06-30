import Image2 from "@//shared/assets/images/icon.png"
import Image1 from "@//shared/assets/images/image1.png"
import { Box, Container, Grid } from "@mantine/core"
import React from "react"

import { Banner, InternshipsCard, TitleHead } from "@/shared/ui"

import s from "./internships.module.scss"

export const Internships = () => {
	return (
		<Box className={s.internshipsWrapper}>
			<Container size={"1440px"}>
				<TitleHead
					info={"Internships"}
					title={"Available Internships"}
					description={
						"Explore internships that will allow you to be truly successful"
					}
				/>
				<Grid gutter={"3rem"} m={"2.5rem 0 2.5rem"}>
					{Array.from({ length: 6 }).map((_, idx) => (
						<Grid.Col span={4} key={idx}>
							<InternshipsCard
								imageSrc={Image1}
								imageAlt={""}
								iconSrc={Image2}
								iconAlt={""}
								day={"Today"}
								title={"Developer"}
								description={
									"Join our team as a Developer Intern and work on cutting-edge projects that shape the future of technology."
								}
								datesLabel={"Internship Dates:"}
								dates={"01.06.2025 - 01.09.2025"}
								onApply={() => alert("Apply for Developer Internship")}
							/>
						</Grid.Col>
					))}
				</Grid>
				<Banner />
			</Container>
		</Box>
	)
}
