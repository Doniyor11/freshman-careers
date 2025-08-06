import { useEditProfileQuery } from "@/feature/my-profile/edit-profile/api/query.ts"
import { EditProfileScheme } from "@/feature/my-profile/edit-profile/api/scheme.ts"
import { IEditProfile } from "@/feature/my-profile/edit-profile/api/types.ts"
import { useProfileStore } from "@/feature/my-profile/model"
import s from "@/feature/my-profile/my-profile.module.scss"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, FileButton, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { useGetUserMeQuery } from "@/entities/user-me/query.ts"

import ImageUser from "@/shared/assets/images/image.png"
import { EnvKeys } from "@/shared/constants/env.ts"
import { Input } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

export const EditProfileModal = () => {
	const matches = useMediaQuery("max-width: 1024px")
	const [selectedImage, setSelectedImage] = useState<File | null>(null)
	const [previewUrl, setPreviewUrl] = useState<string | null>(null)
	const setModalType = useProfileStore((s) => s.setModalType)

	const { data: DefaultValue } = useGetUserMeQuery()

	const handleImageChange = (e: File | null) => {
		const file = e
		if (file) {
			setSelectedImage(file)
			setPreviewUrl(URL.createObjectURL(file))
		}
	}

	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = useForm<IEditProfile>({
		mode: "onChange",
		resolver: yupResolver(EditProfileScheme),
	})

	useEffect(() => {
		reset({
			email: DefaultValue?.email,
			login: DefaultValue?.login,
			phone_number: DefaultValue?.phone_number,
		})
		setPreviewUrl(`${EnvKeys.NEXT_HOST}/${DefaultValue?.profile_image}`)
	}, [reset])

	const { mutate } = useEditProfileQuery(() => setModalType(null))

	const onSubmit = (data: IEditProfile) => {
		mutate({
			email: data.email,
			phone_number: data.phone_number,
			login: data.login,
			profile_image: selectedImage,
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
				<Flex direction={"column"} gap={"0.75rem"} mb={"1rem"}>
					<Box className={s.editModalImageWrapper}>
						<Image
							src={previewUrl || ImageUser}
							alt={""}
							width={196}
							height={196}
							unoptimized
						/>
					</Box>

					<Controller
						name={"profile_image"}
						control={control}
						render={({ field }) => (
							<FileButton
								onChange={(e) => {
									handleImageChange(e)
									field.onChange(e)
								}}
								accept="image/png,image/jpeg"
							>
								{(props) => (
									<OutlineButton h={"3rem"} p={"0 1.5rem"} maw={196} {...props}>
										Edit Profile Image
									</OutlineButton>
								)}
							</FileButton>
						)}
					/>
				</Flex>
				<Flex direction={"column"} gap={"1rem"}>
					<Controller
						name={"email"}
						control={control}
						render={({ field }) => <Input label={"Mail"} {...field} />}
					/>

					<Controller
						name={"login"}
						control={control}
						render={({ field }) => <Input label={"Login"} {...field} />}
					/>

					<Controller
						name={"phone_number"}
						control={control}
						render={({ field }) => <Input label={"Phone"} {...field} />}
					/>
				</Flex>
				<Flex
					direction={"column"}
					gap={"0.75rem"}
					mt={matches ? "4rem" : "1rem"}
				>
					<FilledButton
						bg={"#004C84"}
						h={"3.5rem"}
						type={"submit"}
						disabled={!isDirty || !isValid}
					>
						Save
					</FilledButton>
					<OutlineButton h={"3.5rem"}>Cancel</OutlineButton>
				</Flex>
			</form>
		</>
	)
}
