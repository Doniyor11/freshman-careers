import { Badge, Box, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import Icon5 from "@/shared/assets/images/icon/briefcase.svg"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { Select } from "@/shared/ui"

import s from "./filter.module.scss"
import { FilledButton } from "@/shared/ui/buttons"

const badgeFilters = [
	{
		label: "Format",
		options: ["Remotely", "Office", "Hybrid"],
		stateKey: "format",
	},
	{
		label: "Education",
		options: ["Graduate", "3rd year", "1-2 course", "Absent"],
		stateKey: "education",
	},
	{
		label: "Salary, $",
		options: ["до 100", "101-200", "201-500", "501-1,000", "1,000-2,000", "2000+", "Not specified"],
		stateKey: "salary",
	},
]

type FilterState = {
	format: number | null
	education: number | null
	salary: number | null
}

const initialState: FilterState = {
	format: null,
	education: null,
	salary: null,
}

const BadgeGroup: React.FC<{
	options: string[]
	value: number | null
	onChange: (idx: number) => void
	label: string
}> = ({ options, value, onChange, label }) => (
	<Flex gap={"0.5rem"} direction={"column"}>
		<Text component={"p"} className={s.filterLabel}>
			{label}
		</Text>
		<Flex gap={"0.38rem"} wrap={"wrap"}>
			{options.map((option, idx) => (
				<Badge
					key={option}
					color="#848F98"
					bg={value === idx ? "#FF6A00" : "#E2EAFF"}
					size={"xl"}
					className={cx(s.filterBadge, { [s.filterBadgeActive]: value === idx })}
					onClick={() => onChange(idx)}
				>
					{option}
				</Badge>
			))}
		</Flex>
	</Flex>
)

export const Filter = () => {
	const [filter, setFilter] = React.useState<FilterState>(initialState)

	const handleBadgeChange = (key: keyof FilterState, idx: number) => {
		setFilter(prev => ({ ...prev, [key]: idx }))
	}

	return (
		<Box className={s.filterWrapper}>
			<Box className={s.filterSearch}>
				<Input
					leftSection={<Icon4 />}
					className={"input-custom"}
					placeholder={"Search for internships"}
				/>
			</Box>
			<Flex direction={"column"} gap={"2rem"}>
				<Select
					label={"Internship direction"}
					placeholder={"Internship direction"}
					leftSection={<Icon5 />}
				/>
				<Select
					label={"Internship Date"}
					placeholder={"Select dates"}
					leftSection={<Icon5 />}
				/>
				{badgeFilters.map(({ label, options, stateKey }) => (
					<BadgeGroup
						key={label}
						label={label}
						options={options}
						value={filter[stateKey as keyof FilterState]}
						onChange={idx => handleBadgeChange(stateKey as keyof FilterState, idx)}
					/>
				))}
			</Flex>
			<FilledButton fullWidth h={'3rem'} mt={'1.5rem'}>
				Add interships
			</FilledButton>
		</Box>
	)
}
