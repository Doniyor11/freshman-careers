import { useForgotPasswordQuery } from "@/feature/auth/forgot-password/api/query.ts"
import { ForgotPasswordScheme } from "@/feature/auth/forgot-password/api/scheme.ts"
import { IForgotPassword } from "@/feature/auth/forgot-password/api/types.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { ActionIcon, Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { Input } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

export const ForgotPassword = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<IForgotPassword>({
		mode: "onBlur",
		resolver: yupResolver(ForgotPasswordScheme),
	})
	const { mutate, isPending } = useForgotPasswordQuery(() => {
		setModalType("code-confirmation")
	})

	const onSubmit = (data: IForgotPassword) => {
		mutate({
			email: data?.email,
		})
		localStorage.setItem("user_email", data?.email)
	}
	return (
		<>
			<Box w={matches ? "100%" : 670} className={s.boxWrapper}>
				<ActionIcon className={s.close} onClick={() => setAuthorization(false)}>
					<IconClose />
				</ActionIcon>
				<h2 className={s.otherTitle}>Forgot your password?</h2>
				<Text m={"4px 0 32px"} className={s.cardSubtitle}>
					Enter your email to continue
				</Text>

				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name={"email"}
						control={control}
						render={({ field }) => (
							<Input
								error={errors?.email?.message}
								height={64}
								label={"Email"}
								{...field}
							/>
						)}
					/>
					<FilledButton
						fullWidth
						mt={"64px"}
						h={"3.5rem"}
						type={"submit"}
						loading={isPending}
						disabled={!isDirty || !isValid}
						bg={"#004C84"}
					>
						Send recovery code
					</FilledButton>
				</form>
			</Box>
		</>
	)
}
