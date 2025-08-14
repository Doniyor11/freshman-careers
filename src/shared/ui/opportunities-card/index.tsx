import { Box, Text } from "@mantine/core"
import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"

import s from "./opportunities-card.module.scss"

interface OpportunitiesCardIProps {
	imageSrc: StaticImageData
	title: string
	description: string
}

export const OpportunitiesCard: FC<OpportunitiesCardIProps> = ({
	imageSrc,
	title,
	description,
}) => {
	return (
		<>
			<Box className={s.opportunitiesCard}>
				<Box className={s.opportunitiesCardImage}>
					<Image src={imageSrc} alt={""} width={128} height={128} unoptimized />
				</Box>
				<Text component={"h3"} className={s.opportunitiesCardTitle}>
					{title}
				</Text>
				<Text className={s.opportunitiesCardDescription}>{description}</Text>
			</Box>
		</>
	)
}
