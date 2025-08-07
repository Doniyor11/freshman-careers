import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { confirmationCodeApi } from "./index.ts"
import { IConfirmationCode } from "./types.ts"

export const useConfirmationCodeQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: IConfirmationCode) => confirmationCodeApi(data),
		onSuccess: () => {
			onSuccess && onSuccess()
		},
		onError: (err) => {
			toast.error(err.message)
		},
	})
}
