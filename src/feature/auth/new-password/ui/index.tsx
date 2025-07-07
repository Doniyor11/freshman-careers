import { useNewPasswordQuery } from "@/feature/auth/new-password/api/query.ts"
import { NewPasswordScheme } from "@/feature/auth/new-password/api/scheme.ts"
import { INewPassword } from "@/feature/auth/new-password/api/types.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { ActionIcon, Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import Cookies from "js-cookie"
import { Controller, useForm } from "react-hook-form"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { TOKEN } from "@/shared/constants/env.ts"
import { PasswordInputFilled } from "@/shared/ui/inputs/password-input-filled"
import { useRouter } from "next/router"

export const NewPassword = () => {
	const router = useRouter()
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	const SignupToken = Cookies.get(TOKEN.SIGNUP_TOKEN)
	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = useForm<INewPassword>({
		mode: "onChange",
		resolver: yupResolver(NewPasswordScheme),
	})
	const { mutate } = useNewPasswordQuery(() => {
		router.push("/profile")
		setModalType("register")
		setAuthorization(false)
	})
	const onSubmit = (data: INewPassword) => {
		mutate({
			login: "NewUser",
			password: data?.password,
			password_confirmation: data?.password_confirmation,
			signup_token: SignupToken,
		})
	}

	return (
		<Box w={670} className={s.boxWrapper}>
			<ActionIcon className={s.close} onClick={() => setAuthorization(false)}>
				<IconClose />
			</ActionIcon>
			<h2 className={s.otherTitle}>Enter a new password</h2>
			<Text m={"4px 0 32px"} className={s.cardSubtitle}>
				Enter the password and repeat it again
			</Text>

			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name={"password"}
					control={control}
					render={({ field }) => (
						<PasswordInputFilled
							height={64}
							placeholder={"New password"}
							{...field}
						/>
					)}
				/>
				<Controller
					name={"password_confirmation"}
					control={control}
					render={({ field }) => (
						<PasswordInputFilled
							mt={16}
							height={64}
							placeholder={"Repeat the password"}
							{...field}
						/>
					)}
				/>

				<Button
					h={56}
					mt={64}
					fz={20}
					type="submit"
					disabled={!isDirty || !isValid}
					className={cx(s.formBtn, s.signIn)}
				>
					Continue
				</Button>
			</form>
		</Box>
	)
}
