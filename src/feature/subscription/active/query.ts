import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { subscriptionApi } from "./index.ts"

export const useSubscriptionQuery = (onSuccess?: () => void) => {
	return useMutation({
		mutationFn: subscriptionApi,
		onSuccess: () => {
			toast.success("Subscription successful")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
