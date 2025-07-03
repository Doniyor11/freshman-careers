import { Badge, Box, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import Icon5 from "@/shared/assets/images/icon/briefcase.svg"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { Select } from "@/shared/ui"

import s from "./filter.module.scss"
import { FilledButton } from "@/shared/ui/buttons"

export const Filter = () => {
	const [isActive, setIsActive] = React.useState<number | null>(null)
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
				<Flex gap={"0.5rem"} direction={"column"}>
					<Text component={"p"} className={s.filterLabel}>
						Format
					</Text>
					<Flex gap={"0.38rem"} wrap={"wrap"}>
						{["Remotely", "Office", "Hybrid"].map((label, idx) => (
							<Badge
								key={label}
								color="#848F98"
								bg={isActive === idx ? "#FF6A00" : "#E2EAFF"}
								size={"xl"}
								className={cx(s.filterBadge, { [s.filterBadgeActive]: isActive === idx })}
								onClick={() => setIsActive(idx)}
							>
								{label}
							</Badge>
						))}
					</Flex>
				</Flex>
				<Flex gap={"0.5rem"} direction={"column"}>
					<Text component={"p"} className={s.filterLabel}>
						Education
					</Text>
					<Flex gap={"0.38rem"} wrap={"wrap"}>
						{["Graduate", "3rd year", "1-2 course", "Absent"].map((label, idx) => (
							<Badge
								key={label}
								color="#848F98"
								bg={isActive === idx ? "#FF6A00" : "#E2EAFF"}
								size={"xl"}
								className={cx(s.filterBadge, { [s.filterBadgeActive]: isActive === idx })}
								onClick={() => setIsActive(idx)}
							>
								{label}
							</Badge>
						))}
					</Flex>
				</Flex>
				<Flex gap={"0.5rem"} direction={"column"}>
					<Text component={"p"} className={s.filterLabel}>
						Salary, $
					</Text>
					<Flex gap={"0.38rem"} wrap={"wrap"}>
						{["до 100", "101-200", "201-500", "501-1,000", "1,000-2,000", "2000+", "Not specified"].map((label, idx) => (
							<Badge
								key={label}
								color="#848F98"
								bg={isActive === idx ? "#FF6A00" : "#E2EAFF"}
								size={"xl"}
								className={cx(s.filterBadge, { [s.filterBadgeActive]: isActive === idx })}
								onClick={() => setIsActive(idx)}
							>
								{label}
							</Badge>
						))}
					</Flex>
				</Flex>
			</Flex>
			<FilledButton fullWidth h={'3rem'} mt={'1.5rem'}>Add interships</FilledButton>
		</Box>
	)
}
