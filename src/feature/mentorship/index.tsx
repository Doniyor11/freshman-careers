import IconList from "@//shared/assets/images/icon/tick-circle.svg"
import { Carousel } from "@mantine/carousel"
import { Box, Container, Flex, List, Text, ThemeIcon } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import IconArrowLeft from "@/shared/assets/images/icon/chevron_backward2.svg"
import IconArrowRight from "@/shared/assets/images/icon/chevron_backward.svg"
import ImageOne from "@/shared/assets/images/image-mentorship.jpg"
import { Banner, TitleHead } from "@/shared/ui"

import s from "./mentorship.module.scss"

export const Mentorship = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	return (
		<Container size={"1440px"} id={"mentorship"}>
			<Box className={s.mentorshipWrapper}>
				<TitleHead
					info={"MENTORSHIP"}
					title={`Become Hikmat Abdurahmanov’s mentee, <br/> founder of TEAM University and GroundZero`}
					description={"Join our ranks and save your time on internships"}
				/>
				<Carousel
					height={"auto"}
					controlsOffset="-120px"
					controlSize={31}
					withControls={false}
					withIndicators={false}
					m={matches ? "1.5rem 0" : "2.5rem 0"}
					nextControlIcon={<IconArrowLeft size={16} />}
					previousControlIcon={<IconArrowRight size={16} />}
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
											What Should You Expect?
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Through Freshman’s tailored mentorship, you will receive
											four personal sessions with the Mentor and invitations to
											real-world experiences: from business meetings to
											international conferences. The focus is on bringing
											practical, hands-on exposure.
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Application Timeline and Strategy
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											The Program starts October 25th, 2025 and runs for two
											months. Our team will help you align your goals with the
											Mentor’s expertise, covering areas such as strategic
											decision-making, leadership, entrepreneurial thinking, and
											personal productivity.
										</Text>
									</List.Item>
									<List.Item>
										<Text component={"h3"} className={s.mentorshipTitle}>
											Overall Profile Assessment
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											Mentorship is designed to strengthen not just your skills,
											but your professional presence. You will learn how CEOs
											think in uncertainty, how leaders build high-performing
											teams, and how entrepreneurs adapt to trends.
										</Text>
									</List.Item>
								</List>
							</Box>
							<Box className={s.mentorshipImage} w={matches ? "100%" : "30%"}>
								<Image
									src={ImageOne}
									alt={"Mentorship Image"}
									width={526}
									height={526}
									unoptimized
								/>
							</Box>
						</Flex>
					</Carousel.Slide>

					{/*<Carousel.Slide>*/}
					{/*	<Flex*/}
					{/*		m={"2.5rem 0 2.5rem 0"}*/}
					{/*		gap={"2.5rem"}*/}
					{/*		direction={matches ? "column-reverse" : "row"}*/}
					{/*	>*/}
					{/*		<Box w={matches ? "100%" : "70%"}>*/}
					{/*			<List*/}
					{/*				classNames={{*/}
					{/*					itemWrapper: s.mentorshipItemWrapper,*/}
					{/*					root: s.mentorshipListRoot,*/}
					{/*				}}*/}
					{/*				icon={*/}
					{/*					<ThemeIcon bg={"#fff"} size={40}>*/}
					{/*						<IconList />*/}
					{/*					</ThemeIcon>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						About*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						Center for Progressive Reforms is an independent think*/}
					{/*						tank dedicated to addressing existing challenges in*/}
					{/*						Uzbekistan through innovative research and policy*/}
					{/*						analysis.*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						Positions*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						Accepting one Project Management Intern and one Analytical*/}
					{/*						Writing Intern specializing in international relations and*/}
					{/*						economics*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						Benefits*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						Located adjacent to Tashkent city with access to public*/}
					{/*						transport (metro and bus) and offers flexible schedules*/}
					{/*						for students,*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*			</List>*/}
					{/*		</Box>*/}
					{/*		<Box w={matches ? "100%" : "30%"}>*/}
					{/*			<Box className={s.mentorshipImage}>*/}
					{/*				<Image*/}
					{/*					src={Image1}*/}
					{/*					alt={"Mentorship Image"}*/}
					{/*					width={526}*/}
					{/*					height={526}*/}
					{/*					unoptimized*/}
					{/*					objectFit={"cover"}*/}
					{/*				/>*/}
					{/*			</Box>*/}
					{/*		</Box>*/}
					{/*	</Flex>*/}
					{/*</Carousel.Slide>*/}

					{/*<Carousel.Slide>*/}
					{/*	<Flex*/}
					{/*		m={"2.5rem 0 2.5rem 0"}*/}
					{/*		gap={"2.5rem"}*/}
					{/*		direction={matches ? "column-reverse" : "row"}*/}
					{/*	>*/}
					{/*		<Box w={matches ? "100%" : "70%"}>*/}
					{/*			<List*/}
					{/*				classNames={{*/}
					{/*					itemWrapper: s.mentorshipItemWrapper,*/}
					{/*					root: s.mentorshipListRoot,*/}
					{/*				}}*/}
					{/*				icon={*/}
					{/*					<ThemeIcon bg={"#fff"} size={40}>*/}
					{/*						<IconList />*/}
					{/*					</ThemeIcon>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						About*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						NazarX is a leading aeronautical laboratory within Turin*/}
					{/*						University with international recognition, working on*/}
					{/*						cutting-edge satellites, drones, and more.*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						Positions*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						Accepting one Mechanical Engineering Intern, two Software*/}
					{/*						Engineering Interns, and one Electrical Engineering Intern*/}
					{/*						to work on Can-Satellites.*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*				<List.Item>*/}
					{/*					<Text component={"h3"} className={s.mentorshipTitle}>*/}
					{/*						Benefits*/}
					{/*					</Text>*/}
					{/*					<Text component={"p"} className={s.mentorshipDescription}>*/}
					{/*						Access to laboratory equipment (3D printer, circuitry,*/}
					{/*						etc) for personal projects, ability to collaborate on*/}
					{/*						other NazarX projects, and further employment based on*/}
					{/*						merit*/}
					{/*					</Text>*/}
					{/*				</List.Item>*/}
					{/*			</List>*/}
					{/*		</Box>*/}
					{/*		<Box w={matches ? "100%" : "30%"}>*/}
					{/*			<Box className={s.mentorshipImage}>*/}
					{/*				<Image*/}
					{/*					src={Image2}*/}
					{/*					alt={"Mentorship Image"}*/}
					{/*					width={526}*/}
					{/*					height={526}*/}
					{/*					unoptimized*/}
					{/*					objectFit={"cover"}*/}
					{/*				/>*/}
					{/*			</Box>*/}
					{/*		</Box>*/}
					{/*	</Flex>*/}
					{/*</Carousel.Slide>*/}
				</Carousel>

				<Banner />
			</Box>
		</Container>
	)
}
