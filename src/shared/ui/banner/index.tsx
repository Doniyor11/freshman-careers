import { Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import { useAuthorizationStore } from "@/widgets/auth/model"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./banner.module.scss"

export const Banner = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	const handleOpen = () => {
		setAuthorization(true)
		setModalType("login")
	}

	return (
		<>
			<Flex
				justify={"space-between"}
				align={"center"}
				className={s.internshipsBanner}
				bg={"#004C84"}
				direction={matches ? "column" : "row"}
				gap={matches ? "1rem" : "auto"}
			>
				<Text component={"p"} className={s.internshipsBannerText}>
					Start your path to an internship today!
				</Text>
				<FilledButton
					h={matches ? "2.5rem" : "3.75rem"}
					p={"0rem 1.5rem"}
					onClick={handleOpen}
					fullWidth={matches}
				>
					Apply now
				</FilledButton>
			</Flex>
		</>
	)
}
