import { Flex, Text } from "@mantine/core"

import { useAuthorizationStore } from "@/widgets/auth/model"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./banner.module.scss"

export const Banner = () => {
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
			>
				<Text component={"p"} className={s.internshipsBannerText}>
					Launch your career today!
				</Text>
				<FilledButton h={"3.75rem"} p={"0rem 1.5rem"} onClick={handleOpen}>
					Join Us
				</FilledButton>
			</Flex>
		</>
	)
}
