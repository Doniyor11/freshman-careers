import { ActionIcon, Box, Button, Text } from "@mantine/core"
import cx from "clsx"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { InputFilled } from "@/shared/ui/inputs"

export const SignUp = () => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	return (
		<Box w={670} className={s.boxWrapper}>
			<ActionIcon className={s.close} onClick={() => setAuthorization(true)}>
				<IconClose />
			</ActionIcon>
			<h2>Create Account</h2>
			<Text m={"4px 0 32px"} className={s.cardSubtitle}>
				Enter your email and phone number to create a new account on the
				platform
			</Text>

			<form className={s.form}>
				<InputFilled height={64} placeholder={"Email"} />
				<InputFilled height={64} mt={16} placeholder={"Phone Number"} />
				<Button
					fz={20}
					h={56}
					m={"32px 0 8px"}
					className={cx(s.formBtn, s.signUp)}
				>
					Sign Up
				</Button>
				<Button
					fz={20}
					h={56}
					className={cx(s.formBtn, s.signIn)}
					onClick={() => setModalType("login")}
				>
					Sign In
				</Button>
			</form>
		</Box>
	)
}
