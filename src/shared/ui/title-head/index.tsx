import { Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React, { FC } from "react"

import s from "./title-head.module.scss"

interface TitleHeadIProps {
	info?: string
	title: string
	description?: string
}

export const TitleHead: FC<TitleHeadIProps> = ({
	info,
	title,
	description,
}) => {
	const matches = useMediaQuery("(max-width: 1024px)")

	return (
		<>
			<Flex
				direction={"column"}
				gap={matches ? "0.5rem" : "0.75rem"}
				align={"center"}
				className={s.titleHeadWrapper}
			>
				<Text component={"span"}>{info}</Text>
				<Text component={"h3"} dangerouslySetInnerHTML={{ __html: title }} />
				<Text component={"p"}>{description}</Text>
			</Flex>
		</>
	)
}
