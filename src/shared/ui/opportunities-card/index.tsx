import IconArrow from "@//shared/assets/images/icon/double_arrow.svg"
import { Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"

import s from "./opportunities-card.module.scss"

interface OpportunitiesCardIProps {
	imageSrc: StaticImageData
	title: string
	description: string
	icon?: boolean
}

export const OpportunitiesCard: FC<OpportunitiesCardIProps> = ({
	imageSrc,
	title,
	description,
	icon = true,
}) => {
	const matches = useMediaQuery("(max-width: 1024px)")

	return (
		<Flex
			align={matches ? "flex-start" : "center"}
			direction={matches ? "column" : "row"}
			justify={"center"}
			w={"100%"}
			maw={430}
		>
			<Box className={s.opportunitiesCard}>
				<Box className={s.opportunitiesCardImage}>
					<Image src={imageSrc} alt={""} width={128} height={128} unoptimized />
				</Box>
				<Text component={"h3"} className={s.opportunitiesCardTitle}>
					{title}
				</Text>
				<Text component={"p"} className={s.opportunitiesCardDescription}>
					{description}
				</Text>
			</Box>
			{icon && (
				<Box m={"1rem 0 0 1rem"} className={s.opportunitiesCardArrow}>
					<IconArrow />
				</Box>
			)}
		</Flex>
	)
}
