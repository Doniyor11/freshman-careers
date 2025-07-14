import Icon from "@//shared/assets/images/icon/add.svg"
import ImageInfo from "@//shared/assets/images/image4.png"
import {
	Accordion,
	Box,
	Container,
	Flex,
	Grid,
	Text,
	Title,
} from "@mantine/core"
import Image from "next/image"
import React from "react"

import { TitleHead } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./faq.module.scss"

const groceries = [
	{
		value: "Will I be expelled if I miss a lesson or homework submission?",
		description:
			"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
	},
	{
		value: "Why is the Admissions Program so cheap or expensive?",
		description:
			"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
	},
	{
		value: "How do you select students?",
		description:
			"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
	},
]

export const Faq = () => {
	// See groceries data above
	const items = groceries.map((item) => (
		<Accordion.Item key={item.value} value={item.value}>
			<Accordion.Control>
				<Title className={s.accordionTitle}>{item.value}</Title>
			</Accordion.Control>
			<Accordion.Panel>
				<Title className={s.accordionDescription}>{item.description}</Title>
			</Accordion.Panel>
		</Accordion.Item>
	))

	return (
		<Container size={"1440px"}>
			<Box className={s.faqWrapper}>
				<TitleHead
					info={"FAQ"}
					title={"Questions & Answers"}
					description={
						"Answers to frequently asked questions from people who are moving toward their dreams"
					}
				/>
				<Accordion
					defaultValue={
						"Will I be expelled if I miss a lesson or homework submission?"
					}
					mt={"2.5rem"}
					classNames={{
						item: s.accordionItem,
						control: s.accordionControl,
						panel: s.accordionPanel,
						content: s.accordionContent,
						chevron: s.accordionChevron,
					}}
					chevron={
						<Icon
							style={{
								width: "4rem",
								height: "4rem",
								transform: "rotate(0deg)",
							}}
						/>
					}
				>
					{items}
				</Accordion>
			</Box>
			<Grid m={"4rem 0 4rem 0"} gutter={"2.5rem"}>
				<Grid.Col span={4}>
					<Box className={s.faqImage}>
						<Image
							src={ImageInfo}
							alt={"Image Info"}
							width={416}
							height={416}
						/>
					</Box>
				</Grid.Col>
				<Grid.Col span={8}>
					<Flex
						direction={"column"}
						justify={"space-between"}
						align={"flex-start"}
						className={s.faqText}
						h={"100%"}
						p={"0.87rem 0"}
					>
						<Flex direction={"column"} gap={"0.75rem"}>
							<Text className={s.faqTextTitle} component={"h3"}>
								Still unsure about the Admissions Program?
							</Text>
							<Text className={s.faqTextDescription} component={"p"}>
								You can submit your application regardless. And our team will
								evaluate which Freshman program fits you best.
							</Text>
							<Text className={s.faqTextDescription} component={"p"}>
								Our team will contact you within 72 hours.
							</Text>
						</Flex>
						<FilledButton h={"3.5rem"} bg={"#004C84"}>
							Apply Now
						</FilledButton>
					</Flex>
				</Grid.Col>
			</Grid>
		</Container>
	)
}
