import { SignIn, SignUp } from "@/feature"
import { Box, Container, Flex, Text } from "@mantine/core"
import React from "react"

import { Modal } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./navbar.module.scss"

const navbarLink = [
	{
		label: "Internship",
		href: "/",
	},
	{
		label: "Mentorship",
		href: "/",
	},
	{
		label: "Opportunities",
		href: "/ ",
	},
	{
		label: "Reviews",
		href: "/ ",
	},
]

export const Navbar = () => {
	const [opened, setOpened] = React.useState(false)
	const [signInOpened, setSignInOpened] = React.useState(false)
	const handleSignInOpen = () => setSignInOpened(true)
	const handleOpen = () => setOpened(true)
	return (
		<Box className={s.navbarWrapper}>
			<Container size={"1440px"}>
				<Flex className={s.navbar} justify="space-between" align="center">
					<Flex pl={"2rem"}>
						{navbarLink.map((link) => (
							<a key={link.label} href={link.href} className={s.navbarLink}>
								{link.label}
							</a>
						))}
					</Flex>
					<Flex
						direction={"column"}
						align={"center"}
						justify={"center"}
						gap={"0.13rem"}
						className={'navbarLogoBox'}
						pr={"7rem"}
					>
						<Text component={"p"}>Freshman</Text>
						<Text component={"span"}>Careers</Text>
					</Flex>
					<Flex gap={"1rem"} className={s.navbarButtons}>
						<FilledButton
							className={s.navbarButton}
							bg={"#004C84"}
							onClick={handleSignInOpen}
						>
							Sign In
						</FilledButton>
						<FilledButton className={s.navbarButton} onClick={handleOpen}>
							Sign Up
						</FilledButton>
					</Flex>
				</Flex>
			</Container>
			<Modal size={"43rem"} opened={opened} onClose={() => setOpened(false)}>
				<SignUp />
			</Modal>
			<Modal
				size={"43rem"}
				opened={signInOpened}
				onClose={() => setSignInOpened(false)}
			>
				<SignIn />
			</Modal>
		</Box>
	)
}
