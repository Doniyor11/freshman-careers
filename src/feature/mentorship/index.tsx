import IconList from "@//shared/assets/images/icon/tick-circle.svg"
import { Box, Container, Grid, List, Text, ThemeIcon } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { useGetMentorshipsQuery } from "@/entities/mentorship/query.ts"
import { IMentorship } from "@/entities/mentorship/types.ts"

import { Banner, TitleHead } from "@/shared/ui"

import s from "./mentorship.module.scss"

export const Mentorship = () => {
	const { data } = useGetMentorshipsQuery()
	return (
		<Container size={"1440px"}>
			<Box className={s.mentorshipWrapper}>
				{data?.map((i: IMentorship, index: number) => (
					<React.Fragment key={index}>
						<TitleHead
							info={"Mentorship"}
							title={`Become ${i?.name}’s mentee`}
							description={i?.subtitle}
						/>
						<Grid m={"2.5rem 0 2.5rem 0"} gutter={"2.5rem"}>
							<Grid.Col span={6}>
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
											{i?.title}
										</Text>
										<Text component={"p"} className={s.mentorshipDescription}>
											{i?.description}
										</Text>
									</List.Item>
								</List>
							</Grid.Col>
							<Grid.Col span={6}>
								<Box className={s.mentorshipImage}>
									<Image
										src={`${i?.image}`}
										alt={"Mentorship Image"}
										width={526}
										height={526}
										unoptimized
									/>
								</Box>
							</Grid.Col>
						</Grid>
					</React.Fragment>
				))}
				<Banner />
			</Box>
		</Container>
	)
}
