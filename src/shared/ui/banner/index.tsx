import { Flex, Text } from "@mantine/core"
import React from "react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./banner.module.scss"

export const Banner = () => {
	return (
		<>
			<Flex
				justify={"space-between"}
				align={"center"}
				className={s.internshipsBanner}
				bg={"#004C84"}
			>
				<Text component={"p"} className={s.internshipsBannerText}>
					Start your path to an internship today!
				</Text>
				<FilledButton h={"3.75rem"} p={"0rem 1.5rem"}>
					Apply Now
				</FilledButton>
			</Flex>
		</>
	)
}
