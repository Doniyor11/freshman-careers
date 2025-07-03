import Icon from "@//shared/assets/images/icon/chevron_backward-small.svg"
import ImageUser from "@//shared/assets/images/image2.png"
import { Box, Container, Flex, Menu, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import s from "./navbar-profile.module.scss"

export const NavbarProfile = () => {
	return (
		<Box className={s.profileContainer} p={"0.5rem 0"}>
			<Container size={"1440px"}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex
						direction={"column"}
						align={"center"}
						justify={"center"}
						gap={"0.13rem"}
						className={"navbarLogoBox"}
						p={"0.5rem 1rem"}
					>
						<Text component={"p"}>Freshman</Text>
						<Text component={"span"}>Careers</Text>
					</Flex>
					<Menu
						trigger={"hover"}
						position={"bottom-end"}
						classNames={{
							dropdown: s.profileDropdown,
						}}
					>
						<Menu.Target>
							<Box className={s.profileImage}>
								<Image src={ImageUser} alt={""} width={56} height={56} />
							</Box>
						</Menu.Target>

						<Menu.Dropdown>
							<Flex
								justify={"space-between"}
								className={s.profileItem}
								gap={"1rem"}
							>
								<Flex align={"flex-start"} direction={"column"} w={"11rem"}>
									<Text component={"h3"} className={s.profileItemName}>
										Valera
									</Text>
									<Text component={"p"} className={s.profileItemEmail}>
										postman@gmail.com
									</Text>
								</Flex>
								<Text component={"span"} className={s.profileItemInfo}>
									BASIC
								</Text>
							</Flex>
							<Flex
								className={s.profileItem}
								justify={"space-between"}
								align={"center"}
							>
								<Text component={"span"} className={s.profileItemText}>
									Profile
								</Text>
								<Icon />
							</Flex>
							<Flex
								className={s.profileItem}
								justify={"space-between"}
								align={"center"}
							>
								<Text component={"span"} className={s.profileItemText}>
									Sign Out
								</Text>
								<Icon />
							</Flex>
						</Menu.Dropdown>
					</Menu>
				</Flex>
			</Container>
		</Box>
	)
}
