import IconList from "@//shared/assets/images/icon/tick-circle.svg"
import Image1 from "@//shared/assets/images/mentorship1.png"
import Image2 from "@//shared/assets/images/mentorship2.png"
import { Carousel } from "@mantine/carousel"
import { Box, Container, Flex, List, Text, ThemeIcon } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React, { useState } from "react"

import IconArrowLeft from "@/shared/assets/images/icon/chevron_backward2.svg"
import IconArrowRight from "@/shared/assets/images/icon/chevron_backward.svg"
import { Banner, TitleHead } from "@/shared/ui"

import s from "./mentorship.module.scss"

export const Mentorship = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const [index, setIndex] = useState<number>(1)
	const companyName = ["Center for Progressive Reforms", "NazarX R&D"]
	return (
		<Container size={"1440px"} id={"Mentorship"}>
			<Box className={s.mentorshipWrapper}>
				<TitleHead
					info={"Companies"}
					title={`Become ${companyName[index]}’s mentee`}
					description={"Join our ranks and save your time on internships"}
				/>
				<Carousel
					height={"auto"}
					controlsOffset="-120px"
					controlSize={31}
					withControls
					withIndicators={false}
					m={matches ? "1.5rem 0" : "2.5rem 0"}
					nextControlIcon={<IconArrowLeft size={16} />}
					previousControlIcon={<IconArrowRight size={16} />}
					onSlideChange={(e) => setIndex(e)}
					classNames={{
						control: s.mentorshipWrapperControl,
						controls: s.mentorshipWrapperControls,
					}}
				>
					<Carousel.Slide>
						<Flex
							m={"2.5rem 0 2.5rem 0"}
							gap={"2.5rem"}
							direction={matches ? "column-reverse" : "row"}
						>
							<Box w={matches ? "100%" : "70%"}>
								<List
									classNames={{
										itemWrapper: s.mentorshipItemWrapper,
										root: s.mentorshipListRoot,
									}}
									icon={
										<ThemeIcon bg={"#fff"} size={40}>
											<IconList />
										</ThemeIcon>
									}
								>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											About
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Center for Progressive Reforms is an independent think
											tank dedicated to addressing existing challenges in
											Uzbekistan through innovative research and policy
											analysis.
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Positions
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Accepting one Project Management Intern and one Analytical
											Writing Intern specializing in international relations and
											economics
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Benefits
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Located adjacent to Tashkent city with access to public
											transport (metro and bus) and offers flexible schedules
											for students,
										</Text>
									</List.Item>
								</List>
							</Box>
							<Box w={matches ? "100%" : "30%"}>
								<Box className={s.mentorshipImage}>
									<Image
										src={Image1}
										alt={"Mentorship Image"}
										width={526}
										height={526}
										unoptimized
										objectFit={"cover"}
									/>
								</Box>
							</Box>
						</Flex>
					</Carousel.Slide>

					<Carousel.Slide>
						<Flex
							m={"2.5rem 0 2.5rem 0"}
							gap={"2.5rem"}
							direction={matches ? "column-reverse" : "row"}
						>
							<Box w={matches ? "100%" : "70%"}>
								<List
									classNames={{
										itemWrapper: s.mentorshipItemWrapper,
										root: s.mentorshipListRoot,
									}}
									icon={
										<ThemeIcon bg={"#fff"} size={40}>
											<IconList />
										</ThemeIcon>
									}
								>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											About
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											NazarX is a leading aeronautical laboratory within Turin
											University with international recognition, working on
											cutting-edge satellites, drones, and more.
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Positions
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Accepting one Mechanical Engineering Intern, two Software
											Engineering Interns, and one Electrical Engineering Intern
											to work on Can-Satellites.
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Benefits
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Access to laboratory equipment (3D printer, circuitry,
											etc) for personal projects, ability to collaborate on
											other NazarX projects, and further employment based on
											merit
										</Text>
									</List.Item>
								</List>
							</Box>
							<Box w={matches ? "100%" : "30%"}>
								<Box className={s.mentorshipImage}>
									<Image
										src={Image2}
										alt={"Mentorship Image"}
										width={526}
										height={526}
										unoptimized
										objectFit={"cover"}
									/>
								</Box>
							</Box>
						</Flex>
					</Carousel.Slide>
				</Carousel>

				<Banner />
			</Box>
		</Container>
	)
}
