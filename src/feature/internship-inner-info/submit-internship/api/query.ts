import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { submitApi } from "./index.ts"
import { ISubmit } from "./types.ts"

export const useSubmitQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: ISubmit) => submitApi(data),
		onSuccess: () => {
			onSuccess && onSuccess()
		},
		onError: (err: any) => {
			toast.error(err.detail)
		},
	})
}
