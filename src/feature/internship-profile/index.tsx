import { Filter } from "@/feature"
import { Container, Flex, Grid, Menu, Text } from "@mantine/core"
import React from "react"

import Icon2 from "@/shared/assets/images/icon/chevron_backward3.svg"
import Icon3 from "@/shared/assets/images/icon/chevron_backward-small.svg"
import Image1 from "@/shared/assets/images/image1.png"
import { InternshipsCard } from "@/shared/ui"

import s from "./internship-profile.module.scss"

export const InternshipProfile = () => {
	return (
		<Container
			size={"1440px"}
			className={s.profileContainer}
			p={"3rem 0 7.25rem 0"}
			bg={"#FAFBFF"}
		>

			<Grid>
				<Grid.Col span={3}>
					<Filter />
				</Grid.Col>
				<Grid.Col span={9}>
					<Flex justify={"space-between"} align={"center"}>
						<Text component={"h3"} className={s.myApplicationsTitle}>
							My Applications
						</Text>
						<Menu
							trigger={"hover"}
							position={"bottom-end"}
							classNames={{
								dropdown: s.profileDropdown,
							}}
							width={"16rem"}
						>
							<Menu.Target>
								<Text className={s.myApplicationsSelect}>
									Most Recent <Icon2 />
								</Text>
							</Menu.Target>

							<Menu.Dropdown>
								<Flex
									className={s.profileItem}
									justify={"space-between"}
									align={"center"}
								>
									<Text component={"span"} className={s.profileItemText}>
										Most Recent
									</Text>
									<Icon3 />
								</Flex>
								<Flex
									className={s.profileItem}
									justify={"space-between"}
									align={"center"}
								>
									<Text component={"span"} className={s.profileItemText}>
										The oldest
									</Text>
									<Icon3 />
								</Flex>
							</Menu.Dropdown>
						</Menu>
					</Flex>
					{/* ------------ Card -------------	*/}
					<Grid mt={"1.5rem"} gutter={"1.5rem"}>
						{Array.from(Array(6).keys()).map((key) => (
							<Grid.Col span={4} key={key}>
								<InternshipsCard
									imageSrc={Image1}
									imageAlt={"Image1"}
									iconSrc={Image1}
									iconAlt={"Image1"}
									day={"Today"}
									title={"Trainee designer"}
									description={
										"Internship at Microsoft is a unique experience of working in an international team, participation in real projects and an opportunity to learn the best practices of one of the most innovative corporations in the world."
									}
									datesLabel={"Internship Dates:"}
									dates={"25.05.2025 - 25.08.2025"}
									onApply={() => console.log("Apply clicked")}
									border={false}
								/>
							</Grid.Col>
						))}
					</Grid>
					{/* ------------ Card -------------	*/}
				</Grid.Col>
			</Grid>
		</Container>
	)
}
