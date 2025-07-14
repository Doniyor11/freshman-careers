import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { changePasswordApi } from "./index.ts"
import { IChangePassword } from "./types.ts"

export const useChangePasswordQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: IChangePassword) => changePasswordApi(data),
		onSuccess: () => {
			onSuccess && onSuccess()
		},
		onError: (err) => {
			toast.error(err.message)
		},
	})
}
