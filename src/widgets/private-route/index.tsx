import { SubscriptionModal, UnSubscriptionModal } from "@/feature"
import { useProfileStore } from "@/feature/my-profile/model"
import { PaySubscriptionModal } from "@/feature/my-profile/pay-subscription"
import { useGetAccountSuccessQuery } from "@/feature/subscription/success/query.ts"
import { Box, Center, Loader } from "@mantine/core"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import React, { ReactNode, useEffect } from "react"

import { TOKEN } from "@/shared/constants/env.ts"
import { Modal } from "@/shared/ui"

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const router = useRouter()
	const token = Cookies.get(TOKEN.AUTH_TOKEN)
	const [subscriptionModal, setSubscriptionModal] = useProfileStore((s) => [
		s.subscriptionModal,
		s.setSubscriptionModal,
	])
	const { data: SuccessData } = useGetAccountSuccessQuery()

	useEffect(() => {
		if (SuccessData?.success) {
			setSubscriptionModal(null)
		} else {
			setSubscriptionModal("pay_subscription")
		}
	}, [SuccessData?.success])

	useEffect(() => {
		if (!token) {
			Cookies.remove(TOKEN.AUTH_TOKEN)
			router.push("/main")
		}
	}, [token, router])

	if (!token) {
		return (
			<Center h={"40vh"}>
				<Loader size={"xl"} color={"#004B84" as any} />
			</Center>
		)
	}

	return (
		<>
			<Box bg={"#FAFBFF"}>{children}</Box>

			<Modal
				opened={!!subscriptionModal}
				onClose={() => setSubscriptionModal(null)}
				size={subscriptionModal === "un_subscription" ? "36rem" : "54rem"}
			>
				{subscriptionModal === "subscription" && <SubscriptionModal />}
				{subscriptionModal === "un_subscription" && <UnSubscriptionModal />}
				{subscriptionModal === "pay_subscription" && <PaySubscriptionModal />}
			</Modal>
		</>
	)
}

export default PrivateRoute
