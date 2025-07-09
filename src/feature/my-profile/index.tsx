import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import IconDoc from "@//shared/assets/images/icon/document-text.svg"
import IconTrash from "@//shared/assets/images/icon/trash.svg"
import ImageUser from "@//shared/assets/images/image.png"
import { ActionIcon, Box, Container, Flex, Grid, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { Input, Modal } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./my-profile.module.scss"

export const MyProfile = () => {
	return (
		<Container size={"1440px"} className={s.myProfileWrapper}>
			<Flex>
				<IconBack />
				<Text component={"p"} className={s.backText}>
					Go back
				</Text>
			</Flex>
			<Flex mb={"2.5rem"}>
				<Text component={"h1"} className={s.title}>
					My profile
				</Text>
			</Flex>
			<Grid gutter={"1.5rem"}>
				<Grid.Col span={3}>
					<Flex direction={"column"} gap={"1.5rem"}>
						<ProfileCard />
						<SubscriptionCard />
						<Documents />
					</Flex>
				</Grid.Col>
				<Grid.Col span={9}>
					{/*	 -----------  Grid start ------------ */}
					<Grid>
						<Grid.Col span={4}>
							<Card />
						</Grid.Col>
					</Grid>
					{/*	 -----------  Grid end ------------ */}
				</Grid.Col>
			</Grid>
		</Container>
	)
}

const ProfileCard = () => {
	const [modalType, setModalType] = React.useState<"edit" | "password" | null>(null)

	return (
		<>
			<Box className={s.card}>
				<Text component={"p"} className={s.cardTitle}>
					Basic information
				</Text>
				<Flex direction={"column"} gap={"0.25rem"} mb={"0.75rem"}>
					<Text component={"p"} className={s.label}>
						Profile Image
					</Text>
					<Box className={s.imageWrapper}>
						<Image
							src={ImageUser}
							alt={""}
							width={64}
							height={64}
							unoptimized
						/>
					</Box>
				</Flex>
				<Flex direction={"column"} gap={"0.25rem"} mb={"0.75rem"}>
					<Text component={"p"} className={s.label}>
						Phone Number:
					</Text>
					<Text component={"p"} className={s.titleBig}>
						+321 5214 521 231
					</Text>
				</Flex>
				<Flex direction={"column"} gap={"0.25rem"} mb={"1.5rem"}>
					<Text component={"p"} className={s.label}>
						Email
					</Text>
					<Text component={"p"} className={s.titleBig}>
						mail@mail.com
					</Text>
				</Flex>
				<Flex direction={"column"} gap={"0.5rem"}>
					<FilledButton
						bg={"#004C84"}
						h={"2.75rem"}
						fullWidth
						onClick={() => setModalType("edit")}
					>
						Edit
					</FilledButton>
					<OutlineButton h={"2.75rem"} fullWidth
						onClick={() => setModalType("password")}
						disabled={modalType === "edit"}
					>
						Change password
					</OutlineButton>
				</Flex>
			</Box>
			<Modal opened={!!modalType} onClose={() => setModalType(null)} size={"50rem"}>
				{modalType === "edit" && <EditProfileModal />}
				{modalType === "password" && <ChangePasswordProfileModal />}
			</Modal>
		</>
	)
}

const SubscriptionCard = () => {
	return (
		<Box className={s.card}>
			<Text component={"p"} className={s.cardTitle} mb={"1.5rem"}>
				Subscription
			</Text>
			<Flex direction={"column"} gap={"0.25rem"} mb={"0.75rem"}>
				<Text component={"p"} className={s.label}>
					Status:
				</Text>
				<Text component={"p"} className={s.titleBig}>
					Active
				</Text>
			</Flex>
			<Flex direction={"column"} gap={"0.25rem"} mb={"0.75rem"}>
				<Text component={"p"} className={s.label}>
					Tariff:
				</Text>
				<Text component={"p"} className={s.titleBig}>
					Base
				</Text>
			</Flex>
			<Flex direction={"column"} gap={"0.25rem"} mb={"1.5rem"}>
				<Text component={"p"} className={s.label}>
					Renewal Date:
				</Text>
				<Text component={"p"} className={s.titleBig}>
					24.05.2025
				</Text>
			</Flex>
			<FilledButton bg={"#004C84"} h={"2.75rem"} fullWidth>
				Management
			</FilledButton>
		</Box>
	)
}

const Documents = () => {
	return (
		<Box className={s.card}>
			<Text component={"p"} className={s.cardTitle} mb={"1.5rem"}>
				Documents
			</Text>
			<Flex className={s.documentList}>
				<IconDoc />
				<Flex direction={"column"} flex={"auto"}>
					<Text component={"p"} className={s.documentTitle} ml={"0.5rem"}>
						Summary
					</Text>
					<Text component={"p"} className={s.documentLabel} ml={"0.5rem"}>
						Download date: 05/24/2025
					</Text>
				</Flex>
				<ActionIcon bg={"#fff"}>
					<IconTrash />
				</ActionIcon>
			</Flex>
			<FilledButton bg={"#004C84"} h={"2.75rem"} fullWidth mt={"1.5rem"}>
				Download the document
			</FilledButton>
		</Box>
	)
}

const Card = () => {
	return (
		<Box className={s.internshipsCardWrapper}>
			<Flex
				justify={"space-between"}
				align={"flex-start"}
				p={"1.5rem"}
				className={s.internshipsCardHead}
			>
				<Flex direction={"column"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						Response #1
					</Text>
					<Text component={"h3"} className={s.status} c={"#004B84"}>
						Pending
					</Text>
				</Flex>
				<Box className={s.internshipsCardDay}>Today</Box>
			</Flex>
			<Box className={s.internshipsCardContent}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex align={"center"} gap={10}>
						<Box className={s.internshipsCardIcon}>
							<Image
								src={ImageUser}
								alt={"iconAlt"}
								width={32}
								height={32}
								unoptimized
							/>
						</Box>
						<Text className={s.companyName}>Microsoft</Text>
					</Flex>
				</Flex>
				<Flex direction={"column"} m={"1.5rem 0 1.5rem"} gap={"0.75rem"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						Trainee designer
					</Text>
					<Text component={"p"} className={s.internshipsCardDescription}>
						Internship at Microsoft is a unique experience of working in an
						international team, participation in real projects and the
						opportunity to learn the best practices of one of the most
						innovative corporations in the world.
					</Text>
				</Flex>
				<Flex direction={"column"} mb={"1.5rem"}>
					<Text component={"p"} className={s.internshipsCardDescription}>
						Internship Dates:
					</Text>
					<Text component={"p"} className={s.internshipsCardDate}>
						25.05.2025 - 25.08.2025
					</Text>
				</Flex>
				<FilledButton
					className={s.internshipsCardButton}
					fullWidth
					h={"2.75rem"}
				>
					Open an internship
				</FilledButton>
			</Box>
		</Box>
	)
}

const EditProfileModal = () => {
	const [_, setSelectedImage] = React.useState<File | null>(null)
	const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setSelectedImage(file)
			setPreviewUrl(URL.createObjectURL(file))

		}
	}

	React.useEffect(() => {
		return () => {
			if (previewUrl) URL.revokeObjectURL(previewUrl)
		}
	}, [previewUrl])
	return (
		<>
			<Text className={s.editModalTitle}>Editing a profile</Text>
			<Text className={s.editModalDescription}>
				Enter your email and phone number, then click Save to confirm your
				changes
			</Text>
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
				<input
					type="file"
					accept="image/*"
					style={{ display: "none" }}
					id="profile-image-upload"
					onChange={handleImageChange}
				/>
				<label htmlFor="profile-image-upload">
					<OutlineButton h={"3rem"} p={"0 2rem"}>
						Edit Profile Image
					</OutlineButton>
				</label>
			</Flex>
			<Flex direction={'column'} gap={'1rem'}>
				<Input label={"Mail"} />
				<Input label={"Phone"} />
			</Flex>
			<Flex direction={'column'} gap={'0.75rem'} mt={'4rem'}>
				<FilledButton bg={'#004C84'} h={'3.5rem'}>Save</FilledButton>
				<OutlineButton h={'3.5rem'}>Cancel</OutlineButton>
			</Flex>
		</>
	)
}

const ChangePasswordProfileModal = () => {
	return (
		<>
			<Text className={s.editModalTitle}>Editing a profile</Text>
			<Text className={s.editModalDescription}>
				Enter your email and phone number, then click Save to confirm your
				changes
			</Text>
			<Flex direction={'column'} gap={'1rem'}>
				<Input label={"Mail"} type={"password"}/>
				<Input label={"Phone"} type={"password"}/>
			</Flex>
			<Flex direction={'column'} gap={'0.75rem'} mt={'4rem'}>
				<FilledButton bg={'#004C84'} h={'3.5rem'}>Save</FilledButton>
				<OutlineButton h={'3.5rem'}>Cancel</OutlineButton>
			</Flex>
		</>
	)
}
