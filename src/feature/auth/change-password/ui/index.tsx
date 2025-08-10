import { yupResolver } from "@hookform/resolvers/yup"
import { ActionIcon, Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { Input } from "@/shared/ui"

import { useChangePasswordQuery } from "../api/query"
import { ChangePasswordScheme } from "../api/scheme"
import { IChangePassword, IChangePasswordScheme } from "../api/types"

export const ChangePassword = () => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<IChangePasswordScheme>({
		mode: "onChange",
		resolver: yupResolver(ChangePasswordScheme),
	})

	const { mutate, isPending } = useChangePasswordQuery(() => {
		sessionStorage.removeItem("user_email")
		sessionStorage.removeItem("confirmationCode")
		setModalType("login")
	})

	const onSubmit = (data: IChangePassword) => {
		const email = sessionStorage.getItem("user_email")
		const code = sessionStorage.getItem("confirmationCode")

		mutate({
			code: code ? code : undefined,
			email: email ? email : undefined,
			new_password: data?.new_password,
		})
	}

	return (
		<>
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
						name={"new_password"}
						control={control}
						render={({ field }) => (
							<Input
								error={errors?.new_password?.message}
								height={64}
								label={"New password"}
								type={"password"}
								{...field}
							/>
						)}
					/>
					<Controller
						name={"confirm_password"}
						control={control}
						render={({ field }) => (
							<Input
								error={errors?.confirm_password?.message}
								mt={16}
								height={64}
								type={"password"}
								label={"Repeat the password"}
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
						loading={isPending}
					>
						Continue
					</Button>
				</form>
			</Box>
		</>
	)
}
