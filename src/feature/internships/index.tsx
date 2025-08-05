import { Box, Container, Grid } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import dayjs from "dayjs"
import React from "react"

import { useAuthorizationStore } from "@/widgets/auth/model"

import { useGetInternshipsQuery } from "@/entities/internships/query.ts"
import { IGetInternship } from "@/entities/internships/types.ts"

import { EnvKeys } from "@/shared/constants/env.ts"
import { Banner, InternshipsCard, TitleHead } from "@/shared/ui"

import s from "./internships.module.scss"

export const Internships = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const matchesSmall = useMediaQuery("(max-width: 845px)")
	const matchesMobile = useMediaQuery("(max-width: 576px)")

	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	const { data } = useGetInternshipsQuery()
	return (
		<Box className={s.internshipsWrapper} id={"Internship"}>
			<Container size={"1440px"}>
				<TitleHead
					info={"Internships"}
					title={"Available Internships"}
					description={
						"Gain Industry Expertise as a High School or University Student"
					}
				/>
				<Grid gutter={matches ? "1rem" : "3rem"} m={"2.5rem 0 2.5rem"}>
					{data?.map((i: IGetInternship, index: number) => (
						<Grid.Col span={matchesMobile ? 12 : matchesSmall ? 6 : matches ? 6 : 4} key={index}>
							<InternshipsCard
								companyName={i?.company_title}
								imageSrc={`${EnvKeys.NEXT_HOST}/${i?.picture}`}
								imageAlt={i?.title}
								iconSrc={`${EnvKeys.NEXT_HOST}/${i?.company_image}`}
								iconAlt={i?.company_title}
								day={
									i?.date_posted && dayjs(i.date_posted).isSame(dayjs(), "day")
										? "today"
										: " "
								}
								title={i?.title}
								description={i?.description}
								datesLabel={"Internship Dates:"}
								dates={`${dayjs(i?.internship_start_date).format(
									"DD.MM.YYYY",
								)} - ${dayjs(i?.internship_end_date).format("DD.MM.YYYY")}`}
								onApply={() => {
									setAuthorization(true)
									setModalType("login")
								}}
							/>
						</Grid.Col>
					))}
				</Grid>
				<Banner />
			</Container>
		</Box>
	)
}
