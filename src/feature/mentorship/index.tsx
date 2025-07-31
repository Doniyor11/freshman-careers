import IconList from "@//shared/assets/images/icon/tick-circle.svg"
import Image1 from "@//shared/assets/images/image2.png"
import { Box, Container, Grid, List, Text, ThemeIcon } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { Banner, TitleHead } from "@/shared/ui"

import s from "./mentorship.module.scss"

const listItem = [
	{
		title: "What Should You Expect?",
		description:
			"Be it general academic planning, admissions preparation, or motivational essay revision, we will tailor our approach to your individual needs.",
	},
	{
		title: "Application Timeline and Strategy",
		description:
			"Depending on the requirements of your desired program, our team will access your current research proposal and help you strengthen your main thesis.",
	},
	{
		title: "Overall Profile Assessment",
		description:
			"A successful application is always internally consistent and relatable to the goals of the Master's program. In this course, our team will help you achieve both by carefully evaluating your application as a whole.",
	},
]

export const Mentorship = () => {
	return (
		<Container size={"1440px"} id={"Mentorship"}>
			<Box className={s.mentorshipWrapper}>
				<TitleHead
					info={"Mentorship"}
					title={"Become Jahongir Tursunov’s mentee"}
					description={"Join our ranks and save your time on internships"}
				/>
				<Grid m={"2.5rem 0 2.5rem 0"} gutter={"2.5rem"}>
					<Grid.Col span={8}>
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
							{listItem.map((item, index) => (
								<List.Item key={index}>
									<Text component={"h3"} className={s.mentorshipTitle}>
										{item.title}
									</Text>
									<Text component={"p"} className={s.mentorshipDescription}>
										{item.description}
									</Text>
								</List.Item>
							))}
						</List>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box className={s.mentorshipImage}>
							<Image
								src={Image1}
								alt={"Mentorship Image"}
								width={526}
								height={526}
								unoptimized
							/>
						</Box>
					</Grid.Col>
				</Grid>
				<Banner />
			</Box>
		</Container>
	)
}
