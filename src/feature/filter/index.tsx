import React from "react"
import  s from './filter.module.scss'
import { Box, Input } from "@mantine/core"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { Select } from "@/shared/ui"
import Icon5 from "@/shared/assets/images/icon/briefcase.svg"
export const Filter = () => {
	return (
		<Box className={s.filterWrapper}>
			<Input leftSection={<Icon4 />} className={'input-custom'} placeholder={'Search for internships'}/>
			<Select
				label={'Internship Date'}
				placeholder={"Internship direction"}
				leftSection={<Icon5 />}
			/>
		</Box>
	)
}
