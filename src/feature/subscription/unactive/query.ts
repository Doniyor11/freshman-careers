import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { unsubscriptionApi } from "./index.ts"

export const useUnsubscriptionQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: unsubscriptionApi,
		onSuccess: () => {
			toast.success("Unsubscription successful")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
