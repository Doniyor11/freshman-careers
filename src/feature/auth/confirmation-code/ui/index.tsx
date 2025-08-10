import { useConfirmationCodeQuery } from "@/feature/auth/confirmation-code/api/query.ts"
import { ConfirmationCodeScheme } from "@/feature/auth/confirmation-code/api/scheme.ts"
import { IConfirmationCode } from "@/feature/auth/confirmation-code/api/types.ts"
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

export const ConfirmationCode = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<IConfirmationCode>({
		mode: "onBlur",
		resolver: yupResolver(ConfirmationCodeScheme),
	})
	const { mutate, isPending } = useConfirmationCodeQuery(() => {
		setModalType("change-password")
	})

	const onSubmit = (data: IConfirmationCode) => {
		const userEmail = sessionStorage.getItem("user_email")
		mutate({
			code: data?.code,
			email: userEmail ? userEmail : undefined,
		})
		if (data?.code) {
			sessionStorage.setItem("confirmationCode", data?.code)
		}
	}
	return (
		<>
			<Box w={matches ? "100%" : 670} className={s.boxWrapper}>
				<ActionIcon className={s.close} onClick={() => setAuthorization(false)}>
					<IconClose />
				</ActionIcon>
				<h2 className={s.otherTitle}>Enter the recovery code</h2>
				<Text m={"4px 0 32px"} className={s.cardSubtitle}>
					A recovery code has been sent to your e-mail.
				</Text>

				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name={"code"}
						control={control}
						render={({ field }) => (
							<Input
								type={"number"}
								height={64}
								error={errors?.code?.message}
								label={"Recovery code"}
								{...field}
							/>
						)}
					/>
					<FilledButton
						fullWidth
						mt={"64px"}
						h={"3.5rem"}
						type="submit"
						loading={isPending}
						disabled={!isDirty || !isValid}
						bg={"#004C84"}
					>
						Continue
					</FilledButton>
				</form>
			</Box>
		</>
	)
}
