import Icon from "@//shared/assets/images/icon/add.svg"
import { Accordion, Box, Container, Title } from "@mantine/core"
import React from "react"

import { TitleHead } from "@/shared/ui"

import s from "./faq.module.scss"

const groceries = [
	{
		value: "Who can apply for Freshman Careers internships?",
		description:
			"Our programs are designed for high school and university students aged 14-24. We don't have strict application restrictions, but some internships might have them. ",
	},
	{
		value: "How competitive are the internships?",
		description:
			"Most programs will be competitive, while others will admit you if you meet basic requirements. Prepare a strong application regardless of the program.",
	},
	{
		value: "What kinds of skills or experience do I need to apply?",
		description:
			"Most internships don't require prior work experience. We look for curiosity, motivation, and the ability to learn quickly. Some roles may require skills listed in the internship description.",
	},
	{
		value: "Are the internships remote or in-person?",
		description:
			"We offer both online and offline opportunities. Learn more in the internship description. ",
	},
	{
		value: "Can I apply to more than one opportunity?",
		description:
			"Yes! You’re welcome to apply to multiple internships that match your interests and strengths.",
	},
	{
		value: "Do these internships help with college applications?",
		description:
			"Absolutely! Many students we mentored used their experiences in essays and interviews to stand out at top global universities, including the Ivy League. ",
	},
	{
		value: "Are internships paid?",
		description:
			"We offer both free and paid internships. Some companies may offer full-time positions upon the internship completion.",
	},
	{
		value: "Will I get a certificate or letter of recommendation?",
		description:
			"Many opportunities provide certificates and recommendation letters, which will be available upon request based on your performance.",
	},
	{
		value: "Still have questions? ",
		description:
			"Contact us directly via email <a href='mailto:careers@freshman.sg'>careers@freshman.sg</a> We’re here to help you take the next step.",
	},
]

export const Faq = () => {
	const items = groceries.map((item) => (
		<Accordion.Item key={item.value} value={item.value}>
			<Accordion.Control>
				<Title className={s.accordionTitle}>{item.value}</Title>
			</Accordion.Control>
			<Accordion.Panel>
				<Title
					className={s.accordionDescription}
					dangerouslySetInnerHTML={{ __html: item.description }}
				/>
			</Accordion.Panel>
		</Accordion.Item>
	))

	return (
		<Container size={"1440px"} id={"FAQ"}>
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
		</Container>
	)
}
