import { useApplicationFilterStore } from "@/feature/filter/model"
import { Badge, Box, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import Icon5 from "@/shared/assets/images/icon/briefcase.svg"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { InputDate } from "@/shared/ui/date-input"

import s from "./filter.module.scss"

export const Filter = () => {
	const [
		format,
		education,
		salary,
		search,
		setFormat,
		setEducation,
		setSalary,
		setSearch,
	] = useApplicationFilterStore((s) => [
		s.format,
		s.education,
		s.salary,
		s.search,
		s.setFormat,
		s.setEducation,
		s.setSalary,
		s.setSearch,
	])

	return (
		<Box className={s.filterWrapper}>
			<Box className={s.filterSearch}>
				<Input
					value={search}
					leftSection={<Icon4 />}
					className={"input-custom"}
					placeholder={"Search for internships"}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</Box>
			<Flex direction={"column"} gap={"2rem"}>
				{/*<Select*/}
				{/*	label={"Internship direction"}*/}
				{/*	placeholder={"Internship direction"}*/}
				{/*	leftSection={<Icon5 />}*/}
				{/*/>*/}
				<InputDate
					label={"Internship Date"}
					placeholder={"Select dates"}
					leftSection={<Icon5 />}
				/>
				<BadgeGroup
					label={"Format"}
					options={["Remotely", "Office", "Hybrid"]}
					value={format}
					onChange={(e: any) => setFormat(e)}
				/>
				<BadgeGroup
					label={"Education"}
					options={["Graduate", "3rd year", "1-2 course", "Absent"]}
					value={education}
					onChange={(e: any) => setEducation(e)}
				/>
				<BadgeGroup
					label={"Salary, $"}
					options={[
						"до 100",
						"101-200",
						"201-500",
						"501-1,000",
						"1,000-2,000",
						"2000+",
						"Not specified",
					]}
					value={salary}
					onChange={(e: any) => setSalary(e)}
				/>
			</Flex>
			{/*<FilledButton fullWidth h={"3rem"} mt={"1.5rem"}>*/}
			{/*	Add interships*/}
			{/*</FilledButton>*/}
		</Box>
	)
}

const BadgeGroup: React.FC<{
	options: string[]
	value: string
	onChange: (option: string) => void
	label: string
}> = ({ options, value, onChange, label }) => (
	<Flex gap={"0.5rem"} direction={"column"}>
		<Text component={"p"} className={s.filterLabel}>
			{label}
		</Text>
		<Flex gap={"0.38rem"} wrap={"wrap"}>
			{options.map((option, idx) => (
				<Badge
					key={idx}
					color="#848F98"
					bg={value === option ? "#FF6A00" : "#E2EAFF"}
					size={"xl"}
					className={cx(s.filterBadge, {
						[s.filterBadgeActive]: value === option,
					})}
					onClick={() => onChange(option)}
				>
					{option}
				</Badge>
			))}
		</Flex>
	</Flex>
)
