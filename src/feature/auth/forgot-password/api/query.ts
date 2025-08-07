import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { forgotPasswordApi } from "./index.ts"
import { IForgotPassword } from "./types.ts"

export const useForgotPasswordQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: IForgotPassword) => forgotPasswordApi(data),
		onSuccess: (data: any) => {
			toast.success(data.message)
			onSuccess && onSuccess()
		},
		onError: (err) => {
			toast.error(err.message)
		},
	})
}
