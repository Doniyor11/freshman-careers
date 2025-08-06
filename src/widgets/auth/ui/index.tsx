import { NewPassword, SignIn, SignUp } from "@/feature/auth"
import { Anchor, Modal, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React, { useEffect } from "react"
import { Case, Switch } from "react-if"

import { useAuthorizationStore } from "@/widgets/auth/model"

import IconFacebook from "@/shared/assets/images/icon/icon-facebook.svg"
import IconGoogle from "@/shared/assets/images/icon/icon-google.svg"

import s from "./styles.module.scss"

export const AuthWrapper = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const [authorization, modalType, setAuthorization, setModalType] =
		useAuthorizationStore((s) => [
			s.authorization,
			s.modalType,
			s.setAuthorization,
			s.setModalType,
		])

	useEffect(() => {
		const authType = sessionStorage.getItem("authType") || "login"
		setModalType(
			authType === "register" ||
				authType === "forgot-password" ||
				authType === "new-password"
				? authType
				: "login",
		)
	}, [])

	const socials = (
		<div className={s.socialsWrapper}>
			<Anchor
				className={s.socialAuth}
				href="https://api.freshman.careers/account/login/google"
				target={"_blank"}
			>
				<IconGoogle />
				<Text>Continue with Google</Text>
			</Anchor>

			<Anchor
				className={s.socialAuth}
				href="https://api.freshman.careers/account/login/facebook"
				target={"_blank"}
			>
				<IconFacebook />
				<Text>Continue with Facebook</Text>
			</Anchor>
		</div>
	)

	return (
		<Modal
			centered
			radius={8}
			padding={matches ? "0.75rem" : 24}
			size={"auto"}
			opened={authorization}
			withCloseButton={false}
			onClose={() => setAuthorization(false)}
		>
			<Switch>
				<Case condition={modalType === "login"}>
					<SignIn />
					{socials}
				</Case>
				<Case condition={modalType === "register"}>
					<SignUp />
					{socials}
				</Case>
				<Case condition={modalType === "new-password"}>
					<NewPassword />
				</Case>
			</Switch>
		</Modal>
	)
}
