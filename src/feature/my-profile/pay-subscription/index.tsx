import { useProfileStore } from "@/feature/my-profile/model"
import { useSubscriptionQuery } from "@/feature/subscription/active/query.ts"
import { Box, Flex, Stack, Text } from "@mantine/core"
import { useEffect } from "react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "../my-profile.module.scss"

export const PaySubscriptionModal = () => {
	const setSubscriptionModal = useProfileStore((s) => s.setSubscriptionModal)

	const { mutate, isPending, data } = useSubscriptionQuery()
	useEffect(() => {
		if (data?.checkout_url) {
			window.open(data.checkout_url, "_blank")
			setSubscriptionModal(null)
		}
	}, [data?.checkout_url])
	return (
		<div className={s.paySubscription}>
			<div className={s.modalHead}>
				<Text className={s.logoText}>INTERNSHIP PLATFORM</Text>
				<Text className={s.modalTitle}>
					Get full access to platform by subscribing
				</Text>
				<Text className={s.modalSubtitle}>
					Tired of waiting for success to come to you? Take matters into your
					own hands and we'll help you.
				</Text>
			</div>
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
								onClick={() => mutate()}
								disabled={isPending}
								loading={isPending}
							>
								Subscribe
							</FilledButton>
							<Text className={s.priceText}>
								$7.99 per month after 6-month offer
							</Text>
						</Flex>
					</Stack>
				</Box>
			</div>
			{/*<>*/}
			{/*	<Flex direction={"column"} align={"center"} justify={"center"}>*/}
			{/*		<IconCheck />*/}
			{/*		<div className={s.modalHead}>*/}
			{/*			<Text className={s.logoText}>INTERNSHIP PLATFORM</Text>*/}
			{/*			<Text className={s.modalTitle}>*/}
			{/*				Subscription successfully subscribed*/}
			{/*			</Text>*/}
			{/*			<Text className={s.modalSubtitle}>*/}
			{/*				Fill out the form to be able to send applications to <br />*/}
			{/*				companies for internships*/}
			{/*			</Text>*/}
			{/*		</div>*/}
			{/*		<Button*/}
			{/*			className={s.toBtn}*/}
			{/*			onClick={() => {*/}
			{/*				route.push("/profile")*/}
			{/*				setSubscriptionModal(null)*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			To internships*/}
			{/*		</Button>*/}
			{/*	</Flex>*/}
			{/*</>*/}
		</div>
	)
}
