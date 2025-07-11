import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import IconDoc from "@//shared/assets/images/icon/document-text.svg"
import IconDownload from "@//shared/assets/images/icon/download.svg"
import IconTrash from "@//shared/assets/images/icon/trash.svg"
import ImageUser from "@//shared/assets/images/image.png"
import { EditProfileModal } from "@/feature/my-profile/edit-profile/ui"
import { useProfileStore } from "@/feature/my-profile/model"
import {
	ActionIcon,
	Anchor,
	Box,
	Container,
	Flex,
	Grid,
	Text,
} from "@mantine/core"
import dayjs from "dayjs"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import { useDeleteFilesQuery } from "@/entities/file-delete/query.ts"
import { useGetUserFilesQuery } from "@/entities/user-files/query.ts"
import { IUserFiles } from "@/entities/user-files/types.ts"
import { useGetUserMeQuery } from "@/entities/user-me/query.ts"

import { EnvKeys } from "@/shared/constants/env.ts"
import { Input, Modal, PricingCard } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./my-profile.module.scss"

export const MyProfile = () => {
	const router = useRouter()
	return (
		<Container size={"1440px"} className={s.myProfileWrapper}>
			<Flex onClick={() => router.push("/profile")}>
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
	const [modalType, setModalType] = useProfileStore((s) => [
		s.modalType,
		s.setModalType,
	])
	const { data } = useGetUserMeQuery()
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
						{`+${data?.phone_number}` || "-"}
					</Text>
				</Flex>
				<Flex direction={"column"} gap={"0.25rem"} mb={"1.5rem"}>
					<Text component={"p"} className={s.label}>
						Email
					</Text>
					<Text component={"p"} className={s.titleBig}>
						{data?.email || "-"}
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
					<OutlineButton
						h={"2.75rem"}
						fullWidth
						onClick={() => setModalType("password")}
						disabled={modalType === "edit"}
					>
						Change password
					</OutlineButton>
				</Flex>
			</Box>
			<Modal
				opened={!!modalType}
				onClose={() => setModalType(null)}
				size={"50rem"}
			>
				{modalType === "edit" && <EditProfileModal />}
				{modalType === "password" && <ChangePasswordProfileModal />}
			</Modal>
		</>
	)
}

const SubscriptionCard = () => {
	const [modalType, setModalType] = React.useState<
		"subscription" | "UnSubscription" | null
	>(null)
	return (
		<>
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
				<FilledButton
					bg={"#004C84"}
					h={"2.75rem"}
					fullWidth
					onClick={() => setModalType("subscription")}
				>
					Management
				</FilledButton>
			</Box>
			<Modal
				opened={!!modalType}
				onClose={() => setModalType(null)}
				size={modalType === "UnSubscription" ? "36rem" : "54rem"}
			>
				{modalType === "subscription" && (
					<SubscriptionModal
						handleSubscribe={() => {
							setModalType("UnSubscription")
						}}
					/>
				)}
				{modalType === "UnSubscription" && <UnSubscriptionModal />}
			</Modal>
		</>
	)
}

const Documents = () => {
	const { data } = useGetUserFilesQuery()
	const { mutate, isPending } = useDeleteFilesQuery()
	if (!(data?.length > 0)) return <></>

	return (
		<Box className={s.card}>
			<Text component={"p"} className={s.cardTitle} mb={"1.5rem"}>
				Documents
			</Text>

			{data?.map((i: IUserFiles, index: number) => (
				<Flex key={index} className={s.documentList}>
					<IconDoc />
					<Flex direction={"column"} flex={"auto"}>
						<Text component={"p"} className={s.documentTitle} ml={"0.5rem"}>
							{i?.file_name || "-"}
						</Text>
						<Text component={"p"} className={s.documentLabel} ml={"0.5rem"}>
							Download date:{" "}
							{i?.uploaded_at
								? dayjs(i?.uploaded_at).format("MM/DD/YYYY")
								: "-"}
						</Text>
					</Flex>

					<Flex gap={2} align={"center"}>
						<Anchor
							href={`${EnvKeys.NEXT_HOST}/${encodeURI(i?.file_path)}`}
							download
							target={"_blank"}
						>
							<ActionIcon variant={"transparent"}>
								<IconDownload />
							</ActionIcon>
						</Anchor>
						<ActionIcon
							variant={"transparent"}
							disabled={isPending}
							onClick={() => mutate(i.id)}
						>
							<IconTrash />
						</ActionIcon>
					</Flex>
				</Flex>
			))}
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

const ChangePasswordProfileModal = () => {
	return (
		<>
			<Text className={s.editModalTitle}>Editing a profile</Text>
			<Text className={s.editModalDescription}>
				Enter your email and phone number, then click Save to confirm your
				changes
			</Text>
			<Flex direction={"column"} gap={"1rem"}>
				<Input label={"Mail"} type={"password"} />
				<Input label={"Phone"} type={"password"} />
			</Flex>
			<Flex direction={"column"} gap={"0.75rem"} mt={"4rem"}>
				<FilledButton bg={"#004C84"} h={"3.5rem"}>
					Save
				</FilledButton>
				<OutlineButton h={"3.5rem"}>Cancel</OutlineButton>
			</Flex>
		</>
	)
}

const SubscriptionModal = ({
	handleSubscribe,
}: {
	handleSubscribe: () => void
}) => {
	return (
		<>
			<Text className={s.editModalTitle} mb={"1.75rem"}>
				Subscription management
			</Text>
			<PricingCard
				justify={"center"}
				align={"center"}
				unsubscribe
				title={"Base"}
				description={"Get access to standard platform features for 6 months"}
				buttonText={"Active until 24.05.2025."}
				onClickOnUnSubscribe={handleSubscribe}
			/>
			<Flex direction={"column"} gap={"0.75rem"} mt={"2rem"}>
				<OutlineButton h={"3.5rem"}>Close</OutlineButton>
			</Flex>
		</>
	)
}

const UnSubscriptionModal = () => {
	return (
		<>
			<Text className={s.editModalTitle}>Unsubscribe?</Text>
			<Text className={s.editModalDescription}>
				Are you sure you want to cancel your subscription? After canceling, you
				will not be able to access internships and all applications you have
				submitted will be deleted.
			</Text>
			<Flex direction={"column"} gap={"0.75rem"} mt={"2rem"}>
				<FilledButton bg={"#004C84"} h={"3.5rem"}>
					Do not unsubscribe
				</FilledButton>
				<OutlineButton h={"3.5rem"}>Unsubscribe</OutlineButton>
			</Flex>
		</>
	)
}
