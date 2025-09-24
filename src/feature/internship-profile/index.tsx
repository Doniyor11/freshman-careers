import { Filter } from "@/feature"
import { useApplicationFilterStore } from "@/feature/filter/model"
import { Box, Container, Flex, Grid, Menu, Text } from "@mantine/core"
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import React from "react"

import { useGetMyApplicationsQuery } from "@/entities/my-applications/query.ts"
import { IGetInternship } from "@/entities/my-applications/types.ts"

import ImageTwo from "@/shared/assets/images/company-image.jpg"
import Icon2 from "@/shared/assets/images/icon/chevron_backward3.svg"
import Icon3 from "@/shared/assets/images/icon/chevron_backward-small.svg"
import ImageOne from "@/shared/assets/images/image-mentorship.jpg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { InternshipsCard } from "@/shared/ui"

import s from "./internship-profile.module.scss"

export const InternshipProfile = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const matchesSmall = useMediaQuery("(max-width: 576px)")
	const router = useRouter()
	const [format, education, salary, search, data_order, date, setDataOrder] =
		useApplicationFilterStore((s) => [
			s.format,
			s.education,
			s.salary,
			s.search,
			s.data_order,
			s.date,
			s.setDataOrder,
		])
	const [debouncedValue] = useDebouncedValue(search, 200)

	const { data } = useGetMyApplicationsQuery({
		name: debouncedValue,
		format,
		education,
		salary,
		data_order: data_order,
		start_date_min: date[0] ? dayjs(date[0]).format("YYYY-MM-DD") : undefined,
		start_date_max: date[1] ? dayjs(date[1]).format("YYYY-MM-DD") : undefined,
	})

	return (
		<Container
			size={"1440px"}
			className={s.profileContainer}
			p={"3rem 2rem 7.25rem 2rem"}
			bg={"#FAFBFF"}
		>
			<Grid>
				<Grid.Col span={matches ? 12 : matchesSmall ? 12 : 3}>
					<Filter />
				</Grid.Col>
				<Grid.Col span={matches ? 12 : matchesSmall ? 12 : 9}>
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
									{data_order === "NEWEST"
										? "Most Recent"
										: data_order === "OLDEST"
										? "The oldest"
										: "Select order"}
									<Icon2 />
								</Text>
							</Menu.Target>

							<Menu.Dropdown>
								<Flex
									className={s.profileItem}
									justify={"space-between"}
									align={"center"}
									onClick={() => setDataOrder("NEWEST")}
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
									onClick={() => setDataOrder("OLDEST")}
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
					{data?.length > 0 ? (
						<Grid mt={"1.5rem"} gutter={"1.5rem"} align={"stretch"}>
							<Grid.Col span={matchesSmall ? 12 : matches ? 6 : 4}>
								<InternshipsCard
									imageSrc={`${ImageOne.src}`}
									imageAlt={"image-alt"}
									title={"Mentorship under Hikmat Abdurahmanov"}
									companyName={"TEAM University"}
									iconSrc={`${ImageTwo.src}`}
									iconAlt={"TEAM University"}
									description={
										"For two months, you’ll follow Hikmat Abdurahmanov to meetings, conferences, and even business walks and lunches."
									}
									lineClamp={4}
									onApply={() =>
										router.push(
											"https://airtable.com/appbaC77Zed9FJhJo/pagsETk81jZk6PTGM/form",
										)
									}
								/>
							</Grid.Col>

							{data?.map((i: IGetInternship, index: number) => (
								<Grid.Col
									span={matchesSmall ? 12 : matches ? 6 : 4}
									key={index}
								>
									<InternshipsCard
										companyName={i?.company_title}
										imageSrc={`${EnvKeys.NEXT_HOST}/${i?.picture}`}
										imageAlt={i?.title}
										iconSrc={`${EnvKeys.NEXT_HOST}/${i?.company_image}`}
										iconAlt={i?.company_title}
										day={
											i?.date_posted &&
											dayjs(i.date_posted).isSame(dayjs(), "day")
												? "today"
												: dayjs(i.date_posted).format("DD.MM.YYYY")
										}
										title={i?.title}
										description={i?.description}
										datesLabel={"Internship Dates:"}
										dates={`${dayjs(i?.internship_start_date).format(
											"DD.MM.YYYY",
										)} - ${dayjs(i?.internship_end_date).format("DD.MM.YYYY")}`}
										onApply={() => router.push(`/internship-inner/${i?.id}`)}
									/>
								</Grid.Col>
							))}
						</Grid>
					) : (
						<Box className={"no-data"}>
							<Text>No data available</Text>
						</Box>
					)}
					{/* ------------ Card -------------	*/}
				</Grid.Col>
			</Grid>
		</Container>
	)
}
