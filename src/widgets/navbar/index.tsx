import { Box, Burger, Container, Drawer, Flex, Text } from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { useRouter } from "next/router"
import React from "react"

import { useAuthorizationStore } from "@/widgets/auth/model"
import { AuthWrapper } from "@/widgets/auth/ui"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./navbar.module.scss"

const navbarLink = [
	{
		label: "Internship",
		href: "/",
	},
	{
		label: "Process",
		href: "/ ",
	},
	{
		label: "Mentorship",
		href: "/",
	},
	{
		label: "Reviews",
		href: "/ ",
	},
]

export const Navbar = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const [opened, { toggle }] = useDisclosure()
	const router = useRouter()
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const onLinkClick = (id: string) => {
		const block = document.querySelector(`#${id}`)
		if (!block) return
		block.scrollIntoView(true)
	}

	return (
		<>
			<Box className={s.navbarWrapper}>
				<Container size={"1440px"}>
					<Flex className={s.navbar} justify="space-between" align="center">
						{!matches ? (
							<Flex maw={420} w={"100%"}>
								{navbarLink.map((link, index) => (
									<Text
										key={index}
										className={s.navbarLink}
										onClick={() => onLinkClick(link.label)}
									>
										{link.label}
									</Text>
								))}
							</Flex>
						) : null}
						<Flex
							direction={"column"}
							align={"center"}
							justify={"center"}
							gap={"0.13rem"}
							className={"navbarLogoBox"}
							onClick={() => {
								router.push("/")
							}}
							flex={matches ? "1" : "unset"}
							p={"0.375rem 0.75rem"}
						>
							<Text component={"p"}>Freshman</Text>
							<Text component={"span"}>Careers</Text>
						</Flex>
						{!matches ? (
							<Flex
								maw={420}
								w={"100%"}
								gap={"1rem"}
								className={s.navbarButtons}
							>
								<FilledButton
									onClick={() => {
										setAuthorization(true)
										setModalType("login")
									}}
									className={s.navbarButton}
									bg={"#004C84"}
								>
									Sign In
								</FilledButton>
								<FilledButton
									onClick={() => {
										setAuthorization(true)
										setModalType("register")
									}}
									className={s.navbarButton}
								>
									Sign Up
								</FilledButton>
							</Flex>
						) : null}
						{matches ? (
							<>
								<Burger color={"#004C84"} opened={opened} onClick={toggle} />
								<MobileDrawer opened={opened} close={toggle} />
							</>
						) : null}
					</Flex>
				</Container>
			</Box>
			<AuthWrapper />
		</>
	)
}

interface MobileDrawerProps {
	opened: boolean
	close?: () => void
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
	opened,
	close = () => {},
}) => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	const onLinkClick = (id: string) => {
		const block = document.querySelector(`#${id}`)
		if (!block) return
		block.scrollIntoView(true)
	}
	return (
		<Drawer
			opened={opened}
			onClose={close}
			size={"100%"}
			withCloseButton={false}
			classNames={{
				root: s.navbarDrawerRoot,
				body: s.navbarDrawerBody,
				inner: s.navbarDrawerInner,
				overlay: s.navbarDrawerOverlay,
				content: s.navbarDrawerContent,
			}}
		>
			<Flex direction={"column"} h={"100%"} justify={"space-between"}>
				<Flex direction={"column"} gap={"1rem"}>
					{navbarLink.map((link, index) => (
						<Text
							key={index}
							className={s.navbarLink}
							onClick={() => onLinkClick(link.label)}
							p={0}
						>
							{link.label}
						</Text>
					))}
				</Flex>
				<Flex
					w={"100%"}
					gap={"0.5rem"}
					className={s.navbarButtons}
					direction={"column"}
				>
					<FilledButton
						onClick={() => {
							setAuthorization(true)
							setModalType("login")
						}}
						className={s.navbarButton}
						bg={"#004C84"}
						h={'2.5rem'}
					>
						Войти
					</FilledButton>
					<FilledButton
						onClick={() => {
							setAuthorization(true)
							setModalType("register")
						}}
						className={s.navbarButton}
						h={'2.5rem'}

					>
						Зарегистрироваться
					</FilledButton>
				</Flex>
			</Flex>
		</Drawer>
	)
}
