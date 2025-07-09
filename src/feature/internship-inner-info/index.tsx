import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import ImageRight from "@//shared/assets/images/image5.png"
import IconApple from "@//shared/assets/images/image6.png"
import ImageModal from "@//shared/assets/images/icon/document-text2.svg"
import { Box, Container, Flex, List, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { Modal } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./internship-inner-info.module.scss"

const dataPriceInfo = [
	{
		title: "Payments",
		info: "Once a month",
	},
	{
		title: "Education",
		info: "Graduate",
	},
	{
		title: "Format",
		info: "Remote, full-time",
	},
	{
		title: "Schedule",
		info: "5/2",
	},
	{
		title: "Working hours",
		info: "9:00-17:00",
	},
	{
		title: "Internship dates",
		info: "25.05.2025 - 25.08.2025",
	},
]

export const InternshipInnerInfo = () => {
	return (
		<Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
			<Flex>
				<IconBack />
				<Text component={"p"} className={s.backText}>
					Go back
				</Text>
			</Flex>
			<Flex mb={"2.5rem"}>
				<Text component={"h1"} className={s.title}>
					Trainee designer
				</Text>
			</Flex>
			<Flex gap={"2rem"}>
				{/* 1 */}
				<Flex direction={"column"} flex={"auto"} justify={"space-between"}>
					<Box>
						<Flex gap={"0.69rem"} mb={"0.5rem"} align={"center"}>
							<Image
								src={IconApple}
								alt={"apple"}
								width={42}
								height={42}
								className={s.companyLogo}
								unoptimized
							/>
							<Text component={"p"} className={s.infoText}>
								Apple
							</Text>
						</Flex>
						<Flex mb={"2rem"}>
							<Text component={"p"} className={s.priceText}>
								from $400 a month
							</Text>
						</Flex>
						<Flex direction={"column"} gap={"0.5rem"}>
							{dataPriceInfo.map((item, index) => (
								<Text component={"p"} className={s.priceInfoText} key={index}>
									{item.title}: <b>{item.info}</b>
								</Text>
							))}
						</Flex>
					</Box>
					<FilledButton fullWidth h={"3.5rem"}>
						Submit an application
					</FilledButton>
				</Flex>
				{/* 2 */}
				<Box className={s.imageWrapper}>
					<Image
						src={ImageRight}
						alt={""}
						width={850}
						height={515}
						unoptimized
					/>
				</Box>
			</Flex>
			{/* ----------------- Bottom info ----------------- */}
			<Flex direction={"column"} m={"5rem 0 2.5rem 0"} gap={"0.5rem"}>
				<Text component={"p"} className={s.descriptionTitle}>
					Description
				</Text>
				<Text component={"p"} className={s.description}>
					The Magnit Market project team is looking for Middle+ or Senior level
					Java developers to develop a part of SuperApp with a multi-million
					audience. The goal is to create the country's leading marketplace
					integrated into the Magnet ecosystem. The project includes several
					teams responsible for key blocks: storefront and user journey, order
					management system (OMS), product catalog management (PIM), logistics
					and tools for merchants. The developer will maintain and develop
					services on a modern stack (Java, Kotlin, Spring, Kafka), participate
					in teamwork, rallies and Code Review. Will also have to design and
					develop integrations with other services in the ecosystem, analyze
					requests and build fault-tolerant solutions under high load.
				</Text>
			</Flex>
			<Flex m={"2.5rem 0 4rem 0"} gap={"2.5rem"}>
				{/* 1 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Requirements
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								Have 5+ years of commercial Java development experience
							</Text>
						</List.Item>
					</List>
				</Flex>
				{/*	2 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Terms and conditions
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								Employment in an accredited IT company with competitive salary
							</Text>
						</List.Item>
					</List>
				</Flex>
			</Flex>
			{/* Modal Upload document	*/}
			<Modal
				opened={true}
				onClose={() => {
					console.log("close modal")
				}}
				size={"43rem"}
				centered
			>
				<Text component={"h3"} className={s.titleModal}>Upload document</Text>
				<Text component={"p"} className={s.titleDescription}>
					To upload a document, click on the upload button
				</Text>
				<Box className={s.imageModal} >
					<Flex direction={'column'}>
						<ImageModal />
						<Text component={"p"} className={s.imageName}>Summary 2</Text>
						<Text component={"p"} className={s.imageDesciption}>Successfully uploaded</Text>
					</Flex>
				</Box>
				<Flex direction={'column'} gap={'0.75rem'} mt={'4rem'}>
					<FilledButton h={'3.5rem'} bg={'#004C84'}>Upload the document</FilledButton>
					<OutlineButton h={'3.5rem'}>Cancel</OutlineButton>
				</Flex>
			</Modal>
		</Container>
	)
}
