import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import IconDoc from "@//shared/assets/images/icon/document-text.svg"
import IconDownload from "@//shared/assets/images/icon/download.svg"
import IconTrash from "@//shared/assets/images/icon/trash.svg"
import UserImage from "@//shared/assets/images/user-profile.png"
import { ChangePasswordProfileModal } from "@/feature/my-profile/change-password/ui"
import { EditProfileModal } from "@/feature/my-profile/edit-profile/ui"
import { useProfileStore } from "@/feature/my-profile/model"
import {
	useGetAccountSuccessQuery,
	useSubscriptionRenewalQuery,
} from "@/feature/subscription/success/query.ts"
import { useUnsubscriptionQuery } from "@/feature/subscription/unactive/query.ts"
import {
	ActionIcon,
	Anchor,
	Box,
	Container,
	Flex,
	Grid,
	Stack,
	Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import dayjs from "dayjs"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import { useDeleteFilesQuery } from "@/entities/file-delete/query.ts"
import { useGetResponsesQuery } from "@/entities/responses/query.ts"
import { IResponse } from "@/entities/responses/types.ts"
import { useGetUserFilesQuery } from "@/entities/user-files/query.ts"
import { IUserFiles } from "@/entities/user-files/types.ts"
import { useGetUserMeQuery } from "@/entities/user-me/query.ts"

import { EnvKeys } from "@/shared/constants/env.ts"
import { Modal } from "@/shared/ui"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./my-profile.module.scss"

export const MyProfile = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const router = useRouter()
	return (
		<Container size={"1440px"} className={s.myProfileWrapper}>
			<Flex onClick={() => router.push("/profile")} align={"center"}>
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
				<Grid.Col span={matches ? 12 : 3}>
					<Flex direction={"column"} gap={"1.5rem"}>
						<ProfileCard />
						<SubscriptionCard />
						{/*<Documents />*/}
					</Flex>
				</Grid.Col>
				<Grid.Col span={matches ? 12 : 9}>
					{/*	 -----------  Grid start ------------ */}
					<Grid>
						<Grid.Col span={matches ? 12 : 4}>
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
							src={
								data?.profile_image
									? `${EnvKeys.NEXT_HOST}/${data?.profile_image}`
									: UserImage
							}
							alt={""}
							width={64}
							height={64}
							unoptimized
						/>
						aaa
					</Box>
				</Flex>
				<Flex direction={"column"} gap={"0.25rem"} mb={"0.75rem"}>
					<Text component={"p"} className={s.label}>
						Phone Number:
					</Text>
					<Text component={"p"} className={s.titleBig}>
						{data?.phone_number || "-"}
					</Text>
				</Flex>
				<Flex direction={"column"} gap={"0.25rem"} mb={"1.5rem"}>
					<Text component={"p"} className={s.label}>
						Email
					</Text>
					<Text component={"p"} className={cx(s.titleBig, s.textOverflow)}>
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

export const Documents = () => {
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
	const router = useRouter()
	const { data } = useGetResponsesQuery()

	return data?.length > 0 ? (
		data?.map((i: IResponse, index: number) => (
			<Box className={s.internshipsCardWrapper} key={index}>
				<Flex
					justify={"space-between"}
					align={"flex-start"}
					p={"1.5rem"}
					className={s.internshipsCardHead}
				>
					<Flex direction={"column"}>
						<Text component={"h3"} className={s.internshipsCardTitle}>
							{i?.hashed_id || "-"}
						</Text>
						<Text component={"h3"} className={s.status} c={"#004B84"}>
							{i?.status || "-"}
						</Text>
					</Flex>
					<Box className={s.internshipsCardDay}>
						{i?.application_date &&
						dayjs(i?.application_date).isSame(dayjs(), "day")
							? "today"
							: dayjs(i?.application_date).format("DD.MM.YYYY")}
					</Box>
				</Flex>
				<Box className={s.internshipsCardContent}>
					<Flex justify={"space-between"} align={"center"}>
						<Flex align={"center"} gap={10}>
							<Box className={s.internshipsCardIcon}>
								<Image
									src={`${EnvKeys.NEXT_HOST}/${i?.company?.image}`}
									alt={i?.company?.title}
									width={32}
									height={32}
									unoptimized
								/>
							</Box>
							<Text className={s.companyName}>{i?.company?.title || "-"}</Text>
						</Flex>
					</Flex>
					<Flex direction={"column"} m={"1.5rem 0 1.5rem"} gap={"0.75rem"}>
						<Text component={"h3"} className={s.internshipsCardTitle}>
							{i?.internship?.title || "-"}
						</Text>
						<Text component={"p"} className={s.internshipsCardDescription}>
							{i?.internship?.description || "-"}
						</Text>
					</Flex>
					<Flex direction={"column"} mb={"1.5rem"}>
						<Text component={"p"} className={s.internshipsCardDescription}>
							Internship Dates:
						</Text>
						<Text component={"p"} className={s.internshipsCardDate}>
							{`${dayjs(i?.internship?.internship_start_date).format(
								"DD.MM.YYYY",
							)} - ${dayjs(i?.internship?.internship_end_date).format(
								"DD.MM.YYYY",
							)}`}
						</Text>
					</Flex>
					<FilledButton
						fullWidth
						h={"2.75rem"}
						className={s.internshipsCardButton}
						onClick={() => router.push(`/internship-inner/${i?.internship_id}`)}
					>
						Open an internship
					</FilledButton>
				</Box>
			</Box>
		))
	) : (
		<div className={cx(s.internshipsCardWrapper, "no-data")}>
			<Text>No data available</Text>
		</div>
	)
}

const SubscriptionCard = () => {
	const setSubscriptionModal = useProfileStore((s) => s.setSubscriptionModal)

	const { data: RenewalData } = useSubscriptionRenewalQuery()
	const { data: SuccessData } = useGetAccountSuccessQuery()

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
						{!SuccessData?.success ? "Not Active" : "Active"}
					</Text>
				</Flex>
				{RenewalData && (
					<Flex direction={"column"} gap={"0.25rem"} mb={"1.5rem"}>
						<Text component={"p"} className={s.label}>
							Renewal Date:
						</Text>
						<Text component={"p"} className={s.titleBig}>
							{RenewalData ? dayjs(RenewalData).format("DD.MM.YYYY") : "-"}
						</Text>
					</Flex>
				)}
				<FilledButton
					bg={"#004C84"}
					h={"2.75rem"}
					fullWidth
					onClick={() => {
						setSubscriptionModal(
							!SuccessData?.success ? "pay_subscription" : "subscription",
						)
					}}
				>
					Management
				</FilledButton>
			</Box>
		</>
	)
}

export const SubscriptionModal = () => {
	const setSubscriptionModal = useProfileStore((s) => s.setSubscriptionModal)
	const { data: RenewalData } = useSubscriptionRenewalQuery()
	return (
		<>
			<Text className={s.editModalTitle} mb={"1.75rem"}>
				Subscription management
			</Text>
			<div className={s.pricingCardContainer}>
				<div className={s.discountHeader}>85% DISCOUNT</div>
				<Box className={s.pricingCard}>
					<Stack className={s.cardContent}>
						<Flex
							direction={"column"}
							gap={"1rem"}
							className={s.cardContentTop}
							align={"center"}
						>
							<Text className={s.cardContentTitle}>Base</Text>
							<Text className={s.cardContentDescription}>
								Get access to standard platform features for 6 months
							</Text>
						</Flex>

						<Flex align={"center"} gap={"0.5rem"} justify={"center"}>
							<Text className={s.cardContentPrice}>$5.99</Text>
							<div className={s.priceSection}>
								<Text className={s.priceSectionMonth}>for 6 months</Text>
								<Text className={s.priceSectionInfo}>$47.99</Text>
							</div>
						</Flex>

						<Flex direction={"column"} gap={"0.5rem"} mt={"1.80rem"}>
							<FilledButton
								fullWidth
								size="2.75rem"
								className={s.subscribeButton}
								disabled
							>
								Active until{" "}
								{RenewalData ? dayjs(RenewalData).format("DD.MM.YYYY") : "-"}
							</FilledButton>

							<Text className={s.pricingCardBottomText}>
								<Text
									className={s.pricingCardUnsubscribe}
									onClick={() => setSubscriptionModal("un_subscription")}
								>
									Unsubscribe
								</Text>
							</Text>
						</Flex>
					</Stack>
				</Box>
			</div>
			<Flex direction={"column"} gap={"0.75rem"} mt={"2rem"}>
				<OutlineButton h={"3.5rem"} onClick={() => setSubscriptionModal(null)}>
					Close
				</OutlineButton>
			</Flex>
		</>
	)
}

export const UnSubscriptionModal = () => {
	const setSubscriptionModal = useProfileStore((s) => s.setSubscriptionModal)
	const { mutate, isPending } = useUnsubscriptionQuery(() =>
		setSubscriptionModal(null),
	)
	return (
		<>
			<Text className={s.editModalTitle}>Unsubscribe?</Text>
			<Text className={s.editModalDescription}>
				Are you sure you want to cancel your subscription? After canceling, you
				will not be able to access internships and all applications you have
				submitted will be deleted.
			</Text>
			<Flex direction={"column"} gap={"0.75rem"} mt={"2rem"}>
				<FilledButton
					bg={"#004C84"}
					h={"3.5rem"}
					onClick={() => setSubscriptionModal(null)}
				>
					Do not unsubscribe
				</FilledButton>
				<OutlineButton
					h={"3.5rem"}
					loading={isPending}
					onClick={() => mutate()}
				>
					Unsubscribe
				</OutlineButton>
			</Flex>
		</>
	)
}
