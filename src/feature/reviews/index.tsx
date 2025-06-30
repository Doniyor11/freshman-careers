import IconArrowLeft from "@//shared/assets/images/icon/chevron_backward2.svg"
import IconArrowRight from "@//shared/assets/images/icon/chevron_backward.svg"
import Image1 from "@//shared/assets/images/image3.png"
import { Carousel } from "@mantine/carousel"
import "@mantine/carousel/styles.css"
import { Box, Container, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { Banner, TitleHead } from "@/shared/ui"

import s from "./reviews.module.scss"

export const Reviews = () => {
	return (
		<Box className={s.reviewsWrapper}>
			<Container size={"1440px"}>
				<TitleHead
					info={"REVIEWS"}
					title={"Exciting Stories"}
					description={"Join our ranks and save your time on internships"}
				/>
				<Carousel
					height={460}
					controlsOffset="-120px"
					controlSize={31}
					withControls
					withIndicators={false}
					m={"2.5rem 0"}
					nextControlIcon={<IconArrowLeft size={16} />}
					previousControlIcon={<IconArrowRight size={16} />}
					classNames={{
						control: s.reviewsWrapperControl,
						controls: s.reviewsWrapperControls,
						indicator: s.reviewsWrapperIndicator,
					}}
				>
					{[1, 2, 3, 4].map((item) => (
						<Carousel.Slide key={item}>
							<Flex h={"100%"} bg={"#FAFBFF"}>
								<Box className={s.reviewsWrapperImage}>
									<Image
										src={Image1}
										alt={"Image 1"}
										width={336}
										height={460}
									/>
								</Box>
								<Box className={s.reviewsWrapperContent} p={"3rem"}>
									<Text component={"h3"} className={s.reviewsWrapperTitle}>
										From E-Commerce Startups to Acceptance to Top #1 U.S.
										Entrepreneurship University
									</Text>
									<Text component={"p"} className={s.reviewsWrapperDescription}>
										Initially, I considered venturing into cybersecurity. Thus,
										Valera connected me with one of the leading cybersecurity
										specialists in Singapore.
									</Text>
									<Text component={"p"} className={s.reviewsWrapperDescription}>
										After consulting with him and trying cybersecurity hands-on,
										I decided it was not for me, instead realizing my passion
										for social entrepreneurship through E-Commerce.
									</Text>
									<Text component={"p"} className={s.reviewsWrapperDescription}>
										My proactiveness, bolstered by Freshman's guidance and
										resources, helped me launch entrepreneurial ventures,
										culminating in my enrollment at Babson College, the Top #1
										U.S. university for entrepreneurship
									</Text>
									<Text component={"h4"} className={s.reviewsWrapperUserName}>
										Sanjar Umar
									</Text>
									<Text
										component={"h4"}
										className={s.reviewsWrapperDescription}
									>
										Admissions Program Graduate (June Cohort 2022)
									</Text>
								</Box>
							</Flex>
						</Carousel.Slide>
					))}
				</Carousel>
				<Banner/>
			</Container>
		</Box>
	)
}
