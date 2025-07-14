import { useChangePasswordQuery } from "@/feature/my-profile/change-password/api/query.ts"
import { ChangePasswordScheme } from "@/feature/my-profile/change-password/api/scheme.ts"
import { IChangePassword } from "@/feature/my-profile/change-password/api/types.ts"
import { useProfileStore } from "@/feature/my-profile/model"
import { yupResolver } from "@hookform/resolvers/yup"
import { Flex, Text } from "@mantine/core"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { Input } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "../../my-profile.module.scss"

export const ChangePasswordProfileModal = () => {
	const setModalType = useProfileStore((s) => s.setModalType)

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = useForm<IChangePassword>({
		mode: "onChange",
		resolver: yupResolver(ChangePasswordScheme),
	})
	const { mutate, isPending } = useChangePasswordQuery(() => setModalType(null))
	const onSubmit = (data: IChangePassword) => {
		mutate({
			password: data.password,
			password_confirmation: data.password_confirmation,
		})
	}

	return (
		<>
			<Text className={s.editModalTitle}>Editing a profile</Text>
			<Text className={s.editModalDescription}>
				Enter your email and phone number, then click Save to confirm your
				changes
			</Text>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction={"column"} gap={"1rem"}>
					<Controller
						name={"password"}
						control={control}
						render={({ field }) => (
							<Input label={"Password"} type={"password"} {...field} />
						)}
					/>

					<Controller
						name={"password_confirmation"}
						control={control}
						render={({ field }) => (
							<Input
								label={"Password Confirmation"}
								type={"password"}
								{...field}
							/>
						)}
					/>
				</Flex>
				<Flex direction={"column"} gap={"0.75rem"} mt={"4rem"}>
					<FilledButton
						bg={"#004C84"}
						h={"3.5rem"}
						type={"submit"}
						disabled={!isDirty || !isValid}
						loading={isPending}
					>
						Save
					</FilledButton>
					<OutlineButton onClick={() => setModalType(null)} h={"3.5rem"}>
						Cancel
					</OutlineButton>
				</Flex>
			</form>
		</>
	)
}
