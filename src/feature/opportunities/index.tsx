import { Box, Container } from "@mantine/core"

import IconArrow from "@/shared/assets/images/icon/double_arrow.svg"
import Image5 from "@/shared/assets/images/internship-images/image-five.png"
import Image4 from "@/shared/assets/images/internship-images/image-four.png"
import Image1 from "@/shared/assets/images/internship-images/image-one.png"
import Image6 from "@/shared/assets/images/internship-images/image-six.png"
import Image3 from "@/shared/assets/images/internship-images/image-three.png"
import Image2 from "@/shared/assets/images/internship-images/image-two.png"
import { Banner, OpportunitiesCard, TitleHead } from "@/shared/ui"

import s from "./opportunities.module.scss"

export const Opportunities = () => {
	return (
		<Box className={s.opportunitiesWrapper} id={"Process"}>
			<Container size={"1440px"}>
				<TitleHead
					info={"Process"}
					title={"6 Steps to Land Your Dream Internship:"}
					description={"Follow those steps to follow your dreams!"}
				/>

				<Box className={s.opportunitiesGrid}>
					<OpportunitiesCard
						imageSrc={Image1}
						title={"Explore Internships"}
						description={
							"Browse the list of exclusive global internships and find a project or organization that excites you."
						}
					/>
					<IconArrow className={s.icon} />
					<OpportunitiesCard
						imageSrc={Image2}
						title={"Prepare Your Portfolio"}
						description={
							"Build your resume, highlight your strengths, and tailor your application to the role. We provide templates, feedback, and guidance."
						}
					/>
					<IconArrow className={s.icon} />
					<OpportunitiesCard
						imageSrc={Image3}
						title={"Apply via Freshman Careers"}
						description={
							"Submit your application through our platform and wait till our team reaches out to you with an update of your application."
						}
					/>
				</Box>
				<Box className={s.opportunitiesGrid}>
					<OpportunitiesCard
						imageSrc={Image4}
						title={"Pass the Interview"}
						description={
							"If you pass to the next stage, you will receive an interview invite. Be ready to share more about your aspirations and career goals."
						}
					/>
					<IconArrow className={s.icon} />
					<OpportunitiesCard
						imageSrc={Image5}
						title={"Receive a Final Application Update"}
						description={
							"Congratulations! Whether it’s a think tank, lab, or startup, you’re in! If you got rejected, heads up as there are more internships on our platform."
						}
					/>
					<IconArrow className={s.icon} />
					<OpportunitiesCard
						imageSrc={Image6}
						title={"Grow Professionally"}
						description={
							"Gain and reflect on your new experiences. Leverage them in your next job applications or admissions for Bachelor’s or Master’s Programs."
						}
					/>
				</Box>
				<Banner />
			</Container>
		</Box>
	)
}
