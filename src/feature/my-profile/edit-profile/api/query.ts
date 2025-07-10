import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { editProfileApi } from "./index.ts"
import { IEditProfile } from "./types.ts"

export const useEditProfileQuery = (onSuccess: () => void) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: IEditProfile) => editProfileApi(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [apiKeys.userMe],
			})
			// @ts-ignore
			toast.success(data?.message)
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
